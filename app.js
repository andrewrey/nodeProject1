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
  handler: function (argv) {
    notesObj.addNote(argv.title, argv.body);
  },
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note!");
  },
});

// Create List Command
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler: function () {
    console.log("These are all the notes....");
  },
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Reads out note",
  handler: function () {
    console.log("Reading note now");
  },
});

// Add, Remove, Read, List

yargs.parse();
