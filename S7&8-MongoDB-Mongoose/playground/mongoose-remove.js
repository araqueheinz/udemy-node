const {ObjectID} = require('mongodb');

const {moongose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

Todo.deleteMany({}).then((results)=>{
    console.log(results)
})

Todo.findOneAndDelete({
    text: "something to do"
}).then((todo)=>{
    //something here
})

Todo.findByIdAndDelete(id).then((docs)=>{

})
