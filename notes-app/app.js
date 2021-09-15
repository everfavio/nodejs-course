const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const notes = require('./notes.js');
const { argv } = require('yargs');

// customize yarg versions

yargs.version('1.1.0')


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
  handler: (argv) => {
    return notes.addNotes(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler:  (argv) =>  {
    return notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Read a note',
  handler:  () => {
    console.log(notes.listNotes());
  }
})

yargs.command({
  command: 'find',
  describe: 'find a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    return notes.findNotes(argv.title)
  }
})

yargs.parse()
// console.log(process.argv)
/// console.log(yargs.argv)
