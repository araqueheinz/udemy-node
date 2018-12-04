const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app')

describe('App', ()=>{
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db)

    it('should call the spy correctly', ()=>{
       let spy = expect.createSpy();
       //spy();
       spy('Heinz', 27)
       //expect(spy).toHaveBeenCalled();
       expect(spy).toHaveBeenCalledWith('Heinz', 27);
    })

    it('Should call saveUser with user object', ()=>{
        let email = 'heinz@example.com';
        let password = 'abchello';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        })
    })
})