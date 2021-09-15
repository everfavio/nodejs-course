const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const notes = require('./notes.js');
const { argv } = require('yargs');

// customize yarg versions

yargs.version('1.1.0')

// add, remove, read, list
// create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'note description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    return notes.addNotes(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('reading the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'listing notes',
  handler: function () {
    console.log('Listing all notes')
  }
})

yargs.parse()
// console.log(process.argv)
/// console.log(yargs.argv)
