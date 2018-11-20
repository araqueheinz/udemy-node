const request = require('request');
const keys = require('./secret/keys')

//Example: request('http://www.google.com', function (error, response, body)
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${keys.geo_key}`,
    json: true
}, (err, response, body)=>{
    console.log(body);

})