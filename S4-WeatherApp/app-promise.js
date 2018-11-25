const yargs = require('yargs');
const axios = require('axios');
const keys = require('./secret/keys');

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

let encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.map_quest}&location=${encodedAddress}`;

axios.get(geocodeUrl)
.then((response)=>{

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('unable to fetch the data');
    }

    const lat = response.data.results[0].locations[0].latLng.lat;
    const lng = response.data.results[0].locations[0].latLng.lng;

    const weatherUrl = `https://api.darksky.net/forecast/${keys.weather_key}/${lat},${lng}`;

    console.log('City: ', response.data.results[0].locations[0].adminArea5)
    console.log('State: ', response.data.results[0].locations[0].adminArea3)
p
    return axios.get(weatherUrl);
})
.then((response)=>{

    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It is currently  ${temperature}, but it feels like ${apparentTemperature}`)
})
.catch((e)=>{
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to fetch data');
    }
    else{
        console.log(e.message);
    }
})