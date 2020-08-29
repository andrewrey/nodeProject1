const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  "Your notes...";
};

// AddNote function
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((obj) => obj.title === title);
  if (duplicateNotes.length < 1) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!!"));
  } else {
    console.log(chalk.red.inverse("title already exists"));
  }
};

// Remove Function
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

// List Notes Function
const listNotes = () => {
  console.log(chalk.magenta.inverse("Note Titles:"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(chalk.yellow(note.title)));
};

// Helper Functions: //

//Save Notes Function
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Note loading Function
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log("no file yet, creating empty array");
    return [];
  }
};

// Export //
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
