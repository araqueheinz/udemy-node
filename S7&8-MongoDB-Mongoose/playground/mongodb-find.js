const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to mongodb server')
    const db = client.db('TodoApp')

    /*
    
        db.collection('Todos').find({_id: new ObjectID('5c071062a8567a21f557ccf6')}).toArray()
        .then((docs)=>{
            console.log('Todos')
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) =>{
            console.log('Unable to fetch todos', err)
        })
    
    */

    /*
        db.collection('Todos').find().count()
        .then((count)=>{
            console.log('Todos count', count)
            
        }, (err) =>{
            console.log('Unable to fetch todos', err)
        })
    */

   db.collection('Users').find().count()
   .then((count)=>{
       console.log('Users count', count)
       
   }, (err) =>{
       console.log('Unable to fetch todos', err)
   })

   db.collection('Users').find({name: "Oscar Araque"}).toArray()
   .then((docs)=>{
     console.log(JSON.stringify(docs, undefined, 2));
       
   }, (err) =>{
       console.log('Unable to fetch todos', err)
   })
    

    //client.close();
});