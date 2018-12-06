const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} =require("./models/user");

const app = express();
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

app.listen(3004, () => {
    console.log('Started on port 3004');
});

module.exports = {app}