const validator = require('validator');
const chalk = require('chalk');
const log = console.log;
const getNotes = require('./notes.js')

const msg = getNotes();
console.log(msg)
console.log(validator.isEmail('everfavioat@gmail.com'));
log(chalk.green.bold('Succes!!'))


/*
Challenge: Use the chalk library in your project

1. Install version 2.4.1 of chalk
2. load chalk into app.js
3. Use it to print the string "Success!!" to the console in green
4. Test your work

bonus: use docs to mess around with other styles. Make text bold and inversed.

*/