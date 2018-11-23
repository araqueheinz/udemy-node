//Don't forget to npm install yargs --save
const yargs = require('yargs');

const geocode = require('./geocode/geocode')

const argv = yargs
    .options({
        a: {
            demand: true, 
            alias: 'address',
            describe: 'Address to fetch weather form',
            //Always parse the input as a string as opposed to something else
            string: true
    }
})
.help()
.alias('help', 'h')
.argv;

//console.log(argv);
// geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/39c36b0b4345ec3f075247661c163d49/28.534929,-81.171835',
    json: true
}, (error, response, body)=> {
    // if(error){
    //     console.log('Unable to connect to the Weather server!');
    // }
    // else if(response.statusCode === 400 || response.statusCode === 404 ){
    //     console.log('Unable to fetch the Weather!');
    // }
    // else if(response.statusCode === 200){
    //     console.log(body.currently.temperature);
    // }

    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }
    else{
        console.log('Unable to fetch the Weather!');
    }
});