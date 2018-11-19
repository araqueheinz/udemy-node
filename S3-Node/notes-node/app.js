console.log('Starting App.js....');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const notes = require('./notes');

let command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

        //CRUD//

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
    notes.getAll();
}
else{
    console.log('err! Command not recognized')
}

