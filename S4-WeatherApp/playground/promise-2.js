const request = require('request');
const keys = require('../secret/keys');

let geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.map_quest}&location=${address}`,
            json: true
        }, (error, response, body)=>{
            
           
            if(!error && response.statusCode === 200){
                resolve({
                    city: body.results[0].locations[0].adminArea5,
                    state: body.results[0].locations[0].adminArea3,
                    Zip: body.results[0].locations[0].postalCode,
                    country: body.results[0].locations[0].adminArea1,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });  
            }
            else{
                reject('Unable to connect to Map Quest servers')
            }
        })
    })
}

geocodeAddress('32828').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
    console.log(errorMessage);
});



