const books = require('./data.js');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames(books) {
  return books.map((item) => {
    return `${item.name} - ${item.genre} - ${item.author.name}`;
  });
}

console.log(formatedBookNames(books));