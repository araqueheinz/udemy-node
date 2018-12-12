const {ObjectID} = require('mongodb');

const {moongose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

let id = '5c09a6ad14c389658cd110c2';
if(!ObjectID.isValid(id)){
    console.log('Id not valid')
}

/*
    Todo.find({
        _id: id
    }).then((todos)=>{
        if(todos.length === 0){
            return console.log('data not found');
        }
        console.log("Todos all", todos)
    });

    Todo.findOne({
        _id: id
    }).then((todo)=>{
        if(!todo){
            return console.log('todo not found');
        }
        console.log("Todos find one", todo)
    });
*/

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log("Todos by id", todo)
}).catch((e)=>{
    console.log('ERRRRROR!: ', e);
})

//User query

let uId = "5c07456614f81a2c16498507";

if(!ObjectID.isValid(uId)){
    return console.log('incorrect id for user')
}
else{
    User.findById(uId)
    .then((user)=>{
        if(!user){
            return console.log('Id not found');
        }
        console.log("User by id", user)
    }).catch((e)=>{
        console.log('ERRRRROR!: ', e);
    })
}