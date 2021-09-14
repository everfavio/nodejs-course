const fs = require('fs');
fs.writeFileSync('note.txt', 'hello from my first script')

// Challenge: Append a message to notes.txt

/*
1. Use appendFileSync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the append text
*/
fs.appendFileSync('note.txt', 'This is my append message')
const text = fs.readFileSync('note.txt');
console.log(text);