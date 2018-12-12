const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')

    /*
        deleteMany
        db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result)=>{
            console.log(result);
        })
    */

    /*
        deleteOne
        db.collection().deleteOne({text: "Eat lunch"}).then((result)=>{
            console.log(result);
        })
    */

    /*
        findOneAndDelete
        db.collection('Todos').findOneAndDelete({ _id: new ObjectID("5c0729a9257fb9c8482c2d61") }).then((result)=>{
            console.log(result);
        })
    */

    db.collection('Users').deleteMany({name: "Andrew"});

    db.collection('User').findOneAndDelete({ _id: new ObjectID("5c0729a9257fb9c8482c2d61") }).then((result)=>{
        console.log(result);
    })
    //client.close();
});