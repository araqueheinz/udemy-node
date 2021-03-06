

  /////////////////////
 // USING CRYPTO-JS //
/////////////////////
console.log('////// ****** ||||||||| ****** //////');
console.log('////// ****** Crypto-js ****** //////');
console.log('////// ****** ||||||||| ****** //////');
console.log(' ');

const {SHA256} = require('crypto-js');

let message = "I am user number 3";
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
    id: 4
};
let token ={
    data: data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

let resultHash  = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash == token.hash) {
    console.log('Data was not changed fool! trust');
}else {
    console.log('Data was changed fool! Dont trust');
}

console.log(' ');
  ////////////////////////
 // USING JSONWEBTOKEN //
////////////////////////
console.log('////// ****** ||||||||||||| ****** //////');
console.log('////// ****** Json Web Toke ****** //////');
console.log('////// ****** ||||||||||||| ****** //////');
console.log(' ');

const jwt = require('jsonwebtoken');

let dataJwt = {
    id: 10,
}

let token_jwt = jwt.sign(dataJwt, '123abc');
console.log('jwt.sign:  ', token_jwt);

//Verify it was not changed

let decoded = jwt.verify(token_jwt, '123abc');
console.log('jwt.verify:  ', decoded);

console.log(' ');
  ////////////////////////
 //   USING BCRYPTJS   //
////////////////////////
console.log('////// ****** ||||||||||||| ****** //////');
console.log('////// ******    BCRYPTJS   ****** //////');
console.log('////// ****** ||||||||||||| ****** //////');
console.log(' ');

const bcrypt = require('bcryptjs');
let password = 'abc123!';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
        console.log(hash)
    });
});

let hashPassword = '$2a$10$DGhcCMiIXg6P3i.v8TIvnO1rAQFw8FWDxKN35x6YPbMTVBK4SBq5G';

bcrypt.compare(password, hashPassword, (err, res)=>{
    console.log(res);
});