const yargs = require("yargs");
const chalk = require("chalk");
const notesObj = require("./notes");

// Customize Yargs Version
yargs.version("1.1.0");

// Create Add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.addNote(argv.title, argv.body);
  },
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title to find",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.removeNote(argv.title);
  },
});

// Create List Command
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler() {
    notesObj.listNotes();
  },
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Reads out note",
  builder: {
    title: {
      describe: "title of note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.readNote(argv.title);
  },
});

// Add, Remove, Read, List

yargs.parse();
