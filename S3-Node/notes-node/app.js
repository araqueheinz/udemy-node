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
    notes.addNote(argv.title, argv.body);
}
else if(command === 'read'){
    notes.getNote(argv.title);
}
else if(command === 'remove'){
    notes.removeNote(argv.title);
}
else if(command === 'list'){
    notes.getAll();
}
else{
    console.log('err! Command not recognized')
}

