const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const getNotes = require('./notes.js')

// customize yarg versions

yargs.version('1.1.0')

// add, remove, read, list
// create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  handler: function () {
    console.log('Adding a new note')
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

console.log(process.argv)
console.log(yargs.argv)

