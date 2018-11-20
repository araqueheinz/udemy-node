/*
    let square = (x) => {
        let results = x * x;
        return results;
    }
*/

let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Heinz',
    //Not bind this
    syaHi: () => {
        console.log(arguments);
        console.log(`Hi. ${this.name}`);
    },
    //Bind this
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. ${this.name}`);
    }
}
user.syaHi(1,2, 3);
user.sayHiAlt(1,2,3);
