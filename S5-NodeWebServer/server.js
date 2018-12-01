const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

let app = express();
//hbs partials 
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Middleware
app.use((req, res, next)=>{
    let now = new Date().toString();

    /*
        console.log(`Log: ${now} ${req.method}`);
        console.log(`HTTP Method: ${req.method}`);
        console.log(`URL: ${req.url}`);
    */

    let log = ` ${now} ${req.method} ${req.url}`;

    fs.appendFile('server.log', log + '\n', (error)=>{
        if(error) {
            console.log('Unable to append to server.log!')
        }
    })
    next();
});

// app.use((req, res, next)=>{
//     res.render('maintenance.hbs');    
// });

app.use(express.static(__dirname + '/public'));

//Hbs helpers
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})

app.get('/', (req, res)=>{
    /*Example
        res.send('<h1>Hello Express</h1>');
        res.send({
            name: 'Heinz',
            lastName:'Araque',
            likes: [
                'Working out',
                'Motorcycles',
                'Food',
            ]   
        })
    */
    
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
    })
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Problem getting the data'
    });
});

app.listen(port,()=>{
    console.log(`server is up and running on ${port} `);
});