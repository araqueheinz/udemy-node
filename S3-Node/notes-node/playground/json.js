/*

    let obj = {
        name: 'Heinz'
    };

    let stringObj = JSON.stringify(obj);
    console.log(typeof stringObj);
    console.log(stringObj);

    let personString = '{"name": "Heinz","age": 27}';
    let person = JSON.parse(personString);

    console.log(typeof personString);
    console.log(person);

*/

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//Create notes.json with the originalNoteStrin  
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

//Read notes.json 
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title)
