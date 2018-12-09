const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} =require("./models/user");


const app = express();
const port = process.env.PORT || 3004


app.use(bodyParser.json());


//CREATE A TODO!
app.post('/todos',( req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=> {
        res.send(doc);
    }, (err)=>{
        res.status(400).send(err);
    });
});

//READ ALL TODOS
app.get('/todos',(req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(400).send(err);
    });
});

//READ ONE TO DO
app.get('/todos/:id', (req, res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(!todo || todo.length === 0){
            return res.status(404).send()
        }
        res.send({todo})

    }).catch((e)=>{
        res.status(404).send();
    });

});

//UPDATE ONE TO DO
app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
 
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new:true})
    .then((todo)=>{
        if(!todo) {
            return res.status(404).send()
        }
        res.send(todo)

    }).catch((e)=>{
        res.status(400).send(e)
    })
})

//DELETE ONE TODO
app.delete('/todos/:id', (req, res)=>{
    // get the id
    let id = req.params.id;

    //Validate the Id 
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    //Delete the todo by id
    Todo.findByIdAndDelete(id).then((todo)=>{
        //no doc send 404
        if(!todo || todo.length === 0){
            return res.status(404).send()
        }
        //Success
        res.status(200).send({todo})
        
    }).catch((e)=>{
        //Error with empty body
        res.status(400).send();
    });

})

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {app}