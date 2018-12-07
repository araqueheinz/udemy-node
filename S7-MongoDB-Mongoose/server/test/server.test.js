const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

//es6 destructuring 
const {app} = require ('../server.js');
const {Todo} = require ('../models/todo');




const todos = [{
    _id: new ObjectID,
    text: '1st test to do'
},{  
    _id: new ObjectID,
    text: '2nd test to do'
}]

beforeEach((done)=>{
    Todo.deleteMany().then(()=>{
        Todo.insertMany(todos)
    })
    .then(()=>{
        done()
    });
});

describe('POST /todos',() =>{
    it('Should create a new todo', (done)=>{
        let text = "Test, todo text";

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=>{
            if(err){
                return done(err)
            }

            Todo.find().then((todos)=>{
                console.log(todos.length);
                expect(todos.length).toBe(3);
                expect(todos[2].text).toBe(text)
                done()
            }).catch((e)=>{ return done(e) });
        });
    });

    it('Should not create todo with invalid body data', (done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res)=>{
            if(err){
                return done(err)
            }

            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done()
            }).catch((e)=>{
                return done(e)
            });
        });
    });
});

describe('GET /todos', ()=>{
    it('should get all todos', (done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2)
        })
        .end(done);
    })
})


describe('GET /todos/:id', ()=>{
    it('should return todo docs', (done)=>{
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done)
    })

    it('Should return a 404 if to do not found', (done)=>{
        id = new ObjectID();
        request(app)
        .get(`/todos/${id.toHexString()}`)
        .expect(404)
        .end(done)
    });

    it('Should return a 404 for non-object ids', (done)=>{
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done)
    });


})