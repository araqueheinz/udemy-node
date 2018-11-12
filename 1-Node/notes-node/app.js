console.log('Starting App.js....');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

let user = os.userInfo()
console.log(user);
/*
Starting app....
{ 
    uid: 501,
    gid: 20,
    username: 'heinzaraque',
    homedir: '/Users/heinzaraque',
    shell: '/bin/zsh' 
}
*/

let res = notes.addNote();
console.log(res);
/*
    Starting App.js....
    Starting Notes.js....
    addNote
    New Note

*/

let total = notes.add(9, -2);
console.log(total);
/*
    Starting App.js....
    Starting Notes.js....
    adding!
    7
*/


/*
Option 1 --> 
    1st argument: name of the file,
    2nd argument: text you want to append to the file, 
    3rd argument(Optional): callback (err) message in case it fails
*/

fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
    if(err){
        console.log('Unable to write to file');
    }
});

/*
Option 2 --> appendFileSync 
    does not take the 3rd argument
    fs.appendFileSync('greeting.txt', 'Hello World');
*/

