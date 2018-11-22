const request = require('request');
const keys = require('./secret/keys');
//Don't forget to npm install yargs --save
const yargs = require('yargs');

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

console.log(argv);

let encodedAddress = encodeURIComponent(argv.address);

//Example: request('http://www.google.com', function (error, response, body)
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.geo_key}`,
    //Convert the object into JSON true!
    json: true
}, (error, response, body)=>{
    //pretty printing Format objects when printing to console.
    //console.log(JSON.stringify(response, undefined, 2));
    //console.log(JSON.stringify(error, undefined, 2));
    //console.log(JSON.stringify(body, undefined, 2));

    if(error){
        console.log('Unable to connect to Google servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find the address');
    }
    else if(body.status === 'OK'){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
})

/*
    ➜  S4-WeatherApp git:(master) ✗ node
    > encodeURIComponent('1301 lombard street philadelphia')
    '1301%20lombard%20street%20philadelphia'

    ➜  S4-WeatherApp git:(master) ✗ node
    > decodeURIComponent('1301%20lombard%20street%20philadelphia')
    '1301 lombard street philadelphia'

*/