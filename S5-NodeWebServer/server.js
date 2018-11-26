const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    //res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Heinz',
        lastName:'Araque',
        likes: [
            'Working out',
            'Motorcycles',
            'Food',
        ]
        
    })
});

app.get('/about', (req, res)=>{
    res.send('About page');
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Problem getting the data'
    });
});

app.listen(3000,()=>{
    console.log('server is up and running');
});