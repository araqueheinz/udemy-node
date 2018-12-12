const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate(
        {
        _id: new ObjectID("5c071062a8567a21f557ccf6")  
    },
    {
        $set : {
            text: "1st test: Updated Text",
            completed: true
        }
    },
    {
        returnOriginal: false
    }
    ).then((result) =>{ 
        console.log(result);
    })

    db.collection('Users').findOneAndUpdate(
        {
        _id: new ObjectID("5c07228a8532eb242766f482")  
    },
    {
        $set : {
            name: "Daniel Araque",
        },
        $inc: {
            age:3
        }
    },
    {
        returnOriginal: false
    }
    ).then((result) =>{ 
        console.log(result);
    })
    //client.close();
});