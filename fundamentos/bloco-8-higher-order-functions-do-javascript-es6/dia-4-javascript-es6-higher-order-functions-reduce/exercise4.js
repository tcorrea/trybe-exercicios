const books = require("./data.js");

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// 4 - Encontre o livro com o maior nome.
function longestNamedBook(books) {
  return books.reduce((acc, current) => {
    if (acc.name.length > current.name.length) return acc;
    return current;
  });
}
console.log(longestNamedBook(books));


