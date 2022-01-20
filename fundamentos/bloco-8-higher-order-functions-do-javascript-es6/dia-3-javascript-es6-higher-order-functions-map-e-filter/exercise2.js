const books = require("./data.js");

let today = new Date();
let year = today.getFullYear();

// console.log(year);

function nameAndAge(books) {
  return books.map((item) => {
      return {age: item.releaseYear - item.author.birthYear, author: item.author.name};
  }).sort((a, b) => a.age - b.age);
}

console.log(nameAndAge(books));

const expectedResult = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];
