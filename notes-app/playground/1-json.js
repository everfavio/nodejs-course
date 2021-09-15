const fs = require('fs');
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON);

  // const dataBuffer = fs.readFileSync('1-json.json')
  // const dataJSON = dataBuffer.toString()
  // const data = JSON.parse(dataJSON);
  // console.log(data.title);

  // challengue: work with json and the file system

  /*
  1. load and parse json data
  2. change the name and age property using your info
  3. stringify the changed objet and overwrite the origin data
  4. test your work by viewing data in the json file
  */

  const newBuffer = fs.readFileSync('1-json.json')
  const data = JSON.parse(newBuffer.toString());
  data.name = 'Ever'
  fs.writeFileSync('1-json.json', JSON.stringify(data));
  console.log(data);
  console.log(typeof data);