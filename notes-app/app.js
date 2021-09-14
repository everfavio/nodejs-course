// const add = require('./utils');
//
// const sum = add(5 , 5)
//
// console.log(sum);

/*
Challege: Deffine and use a function in a new file

1. Create a new file called notes.js
2. Create getNotes function that return "Your notes..."
3. export getNotes function
4. From app.js, load in and call the function printing message to console

*/

const getNotes = require('./notes.js')

const msg = getNotes();
console.log(msg)