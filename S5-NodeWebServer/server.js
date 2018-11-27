const express = require('express');
const hbs = require('hbs');

let app = express();
//hbs partials 
hbs.registerPartials(__dirname + '/views/partials');

//Middleware
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//Hbs helpers
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
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

app.listen(3000,()=>{
    console.log('server is up and running');
});