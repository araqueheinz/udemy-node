const request = require('request');
const keys = require('../secret/keys');

let getWeather = (lat, lng, callback) => {request({
        url: `https://api.darksky.net/forecast/${keys.weather_key}/${lat},${lng}`,
        json: true
    }, (error, response, body)=> {
     
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                currentTemperature: body.currently.apparentTemperature
            }); 
        }
        else{
            callback('Unable to fetch the Weather!')
        }
    });
}

module.exports = {
    getWeather
}