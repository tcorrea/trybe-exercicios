const books = require("./data.js");

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors(books) {
  return books.filter((item) => {
    return item.genre === 'Ficção Científica' || item.genre === 'Fantasia';
  }).map((item) => item.author.name).sort();
}


console.log(fantasyOrScienceFictionAuthors(books));