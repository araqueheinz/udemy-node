//const MongoClient = require('mongodb').MongoClient;
//destructuring
const { MongoClient, ObjectID } = require('mongodb');

/*
    let user = { name: 'heinz', age:25 }
    //Object destructuring 
    let {name} = user;
    console.log(name);
*/

/*
    let obj = new ObjectID();
    console.log(obj);   
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')

    /*

        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false

        }, (err, result)=>{
            if(err){
                return console.log('Unable to insert todo!', err)
            }

            console.log(JSON.stringify(result.ops, undefined, 2))
        });
    
    */

    
    // insert new docs into Users (name, age, location)
 
    db.collection('Users').insertOne({
        name: 'Heinz Araque',
        age: 27,
        location: 'Florida'

    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert todo!', err)
        }

        // console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    });

    client.close();
});