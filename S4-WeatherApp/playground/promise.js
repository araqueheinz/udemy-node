/*  First Example

    let somePromise = new Promise((resolve, reject) => {
        //Pending
        setTimeout(()=> {
            //Settle
            resolve('Hey it worked');
            //reject('Unable to work!');
        }, 2500);
        
    });

    somePromise.then((message) =>{
        console.log('Success', message);
    },(errorMessage) => {
        console.log('Error', errorMessage);
    });

*/

// Second example Chain promises callbacks

let asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 2000)
    });
}
asyncAdd(27, '7').then((res)=>{
    console.log('Results', res);
    //Chain!
    return asyncAdd(res, 21);

}).then((res)=>{
    console.log('Chain ', res)

}).catch((errorMessage)=>{
    console.log(errorMessage)
});