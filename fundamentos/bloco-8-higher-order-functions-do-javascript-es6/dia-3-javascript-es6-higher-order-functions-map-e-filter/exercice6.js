const books = require("./data.js");

const expectedResult = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

let today = new Date();
let year = today.getFullYear();

function oldBooks(books) {
  return books.filter((item) => {
    return year - item.releaseYear > 60;
  }).map((item) => item.name);
}

console.log(oldBooks(books));