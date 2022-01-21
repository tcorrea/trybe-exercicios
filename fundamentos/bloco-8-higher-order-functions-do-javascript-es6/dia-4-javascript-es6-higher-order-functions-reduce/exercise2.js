const books = require("./data.js");

const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(books) {
    return books.reduce((acc, current) => {
       return acc.concat(current.author.name, ', ');
    }, '').slice(0, -2).concat('.'); // slice(0, -2) = Remove os ultimos dois caracteres da string (', ')
}

console.log(reduceNames(books));