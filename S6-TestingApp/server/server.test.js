const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', ()=>{

    describe('/GET', ()=>{
        it('should return hello world response', (done)=>{
            request(app)
            .get('/')
            .expect(200)
            // .expect({
            //     error: 'Page not Found'
            // })
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not Found',
                })
            })
            .end(done);
        })

    })

    describe('GET /users', ()=>{
        it('should return my user object', (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Heinz',
                    age: 27
                })
            })
            .end(done);
        })

    })
})


