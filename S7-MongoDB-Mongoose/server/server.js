const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} =require("./models/user");

const app = express();
const port = process.env.PORT || 3004


app.use(bodyParser.json());

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

app.get('/todos',(req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(400).send(err);
    });
});

//GET /todos/1234
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

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {app}