const request = require('request');
const keys = require('../secret/keys');

let geocodeAddress = (address, callback) =>{

    let encodedAddress = encodeURIComponent(address);

    //Example: request('http://www.google.com', function (error, response, body)
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.map_quest}&location=${address}`,
        //Convert the object into JSON true!
        json: true
    }, (error, response, body)=>{
        //pretty printing Format objects when printing to console.
        //console.log(JSON.stringify(response, undefined, 2));
        //console.log(JSON.stringify(error, undefined, 2));
        //console.log(JSON.stringify(body, undefined, 2));
       
        if(error){
            callback('Unable to connect to Map Quest servers')
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find the address')
        }
        else{
            callback(undefined, {
                state: body.results[0].locations[0].adminArea3,
                Zip: body.results[0].locations[0].postalCode,
                country: body.results[0].locations[0].adminArea1,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
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

}



module.exports = {
    geocodeAddress,


}