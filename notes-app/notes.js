const fs = require('fs')
const chalk = require('chalk');
const getNotes = () => {
  return 'your notes';
}

const removeNote = (title) =>  {
  const notes = loadNotes();
  const newNotes = notes.filter(function(note) {
    return note.title !== title;
  })
  saveNotes(newNotes)
  console.log(chalk.green.inverse('Note Title removed!'));
}

const addNotes = (title, body)  => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title == title;
  })
  if(duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    console.log(chalk.green.inverse('Note saved!'))
    return saveNotes(notes);
  }
  console.log(chalk.red.inverse('Note Title taken!'));
}

const listNotes = () => {
  const notes =  loadNotes();
  notes.forEach((note) => console.log(note.title));
}

const findNotes = (titleParam) => {
  const notes = loadNotes();
  const noteToFind =  notes.find((note) => note.title === titleParam);
  if (!noteToFind) {
    return console.log(chalk.red.inverse('Note not found!'))
  }
  return console.log(chalk.green.inverse(noteToFind.body))
}

const loadNotes = () => {
  try{
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }
}

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}


module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  findNotes: findNotes,
};