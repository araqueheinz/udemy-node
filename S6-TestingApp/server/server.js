const express = require('express');

let app = express();

app.get('/', (req, res) =>{
    // res.status(404).send('Hello World');
    res.status(200).send({
        error: 'Page not Found',
        name: 'Todo App v1.0'
    });

})

app.get('/users', (req, res)=>{
    res.send([
        {
            name: 'Heinz',
            age: 27
        },
        {
            name: 'Fonda',
            age: 25
        },
        {
            name: 'Ray',
            age: 33
        },
    ]);
})
app.listen(3002);

module.exports.app = app;