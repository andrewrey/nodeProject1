const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

// AddNote function
const addNote = function (title, body) {
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
const removeNote = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};
// Helper Functions: //

//Save Notes Function
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Note loading Function
const loadNotes = function () {
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
};
