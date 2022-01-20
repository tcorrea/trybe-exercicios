const books = require("./data.js");

const expectedResult = "O Senhor dos Anéis";

function authorWith3DotsOnName(books) {
  return books.filter((item) => {
    return (
      item.author.name.split(" ").filter((w) => w.endsWith(".")).length === 3
    );
  })[0].name;
}

console.log(authorWith3DotsOnName(books));
