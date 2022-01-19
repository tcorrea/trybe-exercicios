const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercicio 1
function authorBornIn1947(books) {
  return books.find((item) => item.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947(books));

// Exercicio 2
function smallerName(books) {
  let nameBook;
  // escreva aqui o seu código
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
smallerName(books)
// console.log(smallerName(books));

// Exercicio 3
function getNamedBook(books) {
  return books.find( (item) => item.name.length === 26);
}

console.log(getNamedBook(books));

// Exercicio 4
console.log('Exercicio 4');
function booksOrderedByReleaseYearDesc(books) {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));

// Exercicio 5
console.log('Exercicio 5');

function everyoneWasBornOnSecXX(books) {
  return books.every((item) => Math.ceil(item.author.birthYear / 100) === 20);
}
console.log(everyoneWasBornOnSecXX(books));

// Exercicio 6
console.log('Exercicio 6');

function someBookWasReleaseOnThe80s(books) {
  return books.some((item) => (item.releaseYear >= 1980 && item.releaseYear <= 1989));
}

console.log(someBookWasReleaseOnThe80s(books));

// Exercicio 7
console.log('Exercicio 7');

function authorUnique(books) {
 
}
console.log(authorUnique(books));