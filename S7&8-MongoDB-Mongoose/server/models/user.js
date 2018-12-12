const mongoose = require("mongoose");
const validator = require('validator');

/*
    {
        email: 'heinz@hotmail.com',
        password: 'abc123'
        tokens: [{
            access: 'auth',
            token: 'nsjndjasndkjasndkjnsad
        }]
    }

*/

let User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {
    User
}