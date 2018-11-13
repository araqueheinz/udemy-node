console.log('Starting Notes.js....');

let addNote = (title, body) => {
    console.log('Adding note: ', title, body);
};

let getNote = title => {
    console.log('Getting note:', title);
}

let removeNote = title => {
    console.log('Removing note:', title);
}

let getAll = () => {
    console.log('Getting all notes');
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote

}
