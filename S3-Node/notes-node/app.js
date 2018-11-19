const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const notes = require('./notes');

let command = argv._[0];

if(command === 'add'){
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        notes.logNote(note)
    }
    else{
        console.log('Note title taken');
    }

}

else if(command === 'read'){
    let note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }
    else{
        console.log('Note not found');
    }

}

else if(command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

}

else if(command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(element => notes.logNote(element));

}

else{
    console.log('err! Command not recognized');

}

