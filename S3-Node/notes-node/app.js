const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
        describe: 'Title of the note',
        //required or not default: false
        demand: true,
        //Instead of --title="secret" we can use -t="to anything"
        alias: 't'

}

const argv = yargs
//.command --> Will let the user know the requirements of the app.
.command('add', 'Add a new note', {
    title: {
        //
        describe: 'Title of the note',
        //required or not default: false
        demand: true,
        //Instead of --title="secret" we can use -t="to anything"
        alias: 't'
    },
    body: {
        describe: 'Message written on the note',
        //required or not default: false
        demand: true,
        //Instead of --body="something" we can use -b="to anything"
        alias: 'b'
    }
})
.command('list', 'Displays all the notes')
.command('read', 'Reads a note', {
    title: titleOptions
})
.command('remove', 'Removes a note', {
    title: titleOptions
})
//.help method will display the instructions. 
.help()
.argv;

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

