const fs = require("fs");

function getNotes() {
  return "Your notes...";
}

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((obj) => obj.title === title);
  if (duplicateNotes.length < 1) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("New note added!!");
  } else {
    console.log("title already exists");
  }
};

// Save Notes Function //
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
// Note loading Function //
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
};
