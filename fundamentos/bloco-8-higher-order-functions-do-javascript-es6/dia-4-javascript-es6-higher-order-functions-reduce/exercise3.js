const books = require("./data.js");

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados
function averageAge(books) {
  return books.reduce((acc, current) => {
    return acc + (current.releaseYear - current.author.birthYear);
  }, 0) / books.length;
}
console.log(averageAge(books));