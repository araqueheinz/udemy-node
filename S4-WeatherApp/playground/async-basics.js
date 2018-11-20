//non blocking example
console.log('Starting app')

//Function, number of seconds --> 2 seconds
setTimeout(() => {
    console.log('Inside of callback');
}, 2000)

setTimeout(() => {
    console.log('Inside of callback 2.0');
},0)

console.log('Finishing up!');

/*
    ➜  playground git:(master) ✗ node async-basics.js
        Starting app
        Finishing up!
        Inside of callback 2.0
        Inside of callback
*/

//Lecture 27
//What happens behind the scenes? 
    //Call stack
    //Node APIs
    //Callback Queue
    //Event loop