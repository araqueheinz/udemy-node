const utils = require('./utils')
const expect = require('expect');

it('should add two numbers', ()=>{
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');

//    if(res !== 44){
//        throw new Error(`Expected 44, but got ${res}.`)
//    }
});

//done lets mocha know there's an async test going on
it('should be async add two numbers', (done) =>{
    utils.asyncAdd(4, 3, (sum) =>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
})

it('should square the given number', ()=>{
    let res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
    // if(res !== 81){
    //     throw new Error(`Expected 81, but got ${res}.`)
    // }
});

//done lets mocha know there's an async test going on
it('should be async square a number', (done) =>{
    utils.asyncSquare(9, (square) =>{
        expect(square).toBe(81).toBeA('number');
        done();
    });
})

it('should expect some values', ()=>{
    /*
        expect(12).toNotBe(11);

        expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
        expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});

        expect([1,3,4]).toInclude(4);
        expect([1,3,4]).toExclude(2);

        expect({
            name: 'Heinz',
            age: 27,
            location: 'Florida'
        }).toInclude({
            age: 27,
        })

        expect({
            name: 'Heinz',
            age: 27,
            location: 'Florida'
        }).toExclude({
            age: 23,
        })

    */

});

it('should verify first and last names are set', () => {
    let user = {
        location: "florida",
        age: 27
    }

    let res = utils.setName(user, "Heinz Araque");

    expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: "Heinz",
        lastName: "Araque"
    })
});

