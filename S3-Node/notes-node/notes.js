console.log('Starting Notes.js....');
const fs = require('fs');

let fetchNotes = () => {
    try{  
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (error) {
        return []; 
    }
    
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    
    let duplicateNotes = notes.filter(element => element.title === title)

    if(duplicateNotes.length === 0){
        notes.push(note); 
        saveNotes(notes);
        return note;
    }
};

let getNote = title => {
    let notes = fetchNotes();
    let filtererNotes = notes.filter(element => element.title === title);
    return filtererNotes[0];
}   

let removeNote = title => {
    let notes = fetchNotes();
    let filtererNotes = notes.filter(element => element.title !== title);
    saveNotes(filtererNotes);

    return notes.length !== filtererNotes.length;
}

let getAll = () => {
    console.log('Getting all notes');
}

let logNote = note =>{ 
    console.log('--');
    console.log(`Tittle: ${note.title}`);
    console.log(`Body: ${note.body}`);
    
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote

}
