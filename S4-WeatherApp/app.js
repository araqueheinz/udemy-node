//Don't forget to npm install yargs --save
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);

    }
    
    else{
        // console.log(JSON.stringify(results, undefined, 2));
        //console.log(results.Zip);
/*
         ////////////////////////////
        //CHAIN CALLBACKS TOGETHER//
       ////////////////////////////
*/
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                //console.log(JSON.stringify(weatherResults, undefined, 2))
                console.log(`City: ${results.city}, State: ${results.state}, Country: ${results.country}, Zip code: ${results.Zip}`);
                console.log(`Temperature: ${weatherResults.temperature}, but it feels like ${weatherResults. currentTemperature}`);
            }
        });
    }
});
