let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (const number of numbers) {
  console.log(number);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;

for (const number of numbers) {
  soma = soma + number;
}
console.log("Soma: " + soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length;
console.log("Média: " + media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
media > 20
  ? console.log("valor maior que 20")
  : console.log("valor menor ou igual a 20");

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let biggest = 0;
for (const number of numbers) {
  if (number > biggest) {
    biggest = number;
  }
}
console.log("Maior numero: " + biggest);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odd = 0;
for (const number of numbers) {
  if (number % 2 != 0) {
    odd++;
  }
}
odd > 0
  ? console.log("Quantidade de impares: " + odd)
  : console.log("nenhum valor ímpar encontrado");

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let smallest = biggest;
for (const number of numbers) {
    if(number<smallest){
        smallest=number;
    }
}
console.log(`Menor número: ${smallest}`);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arr = [];
for (let i = 1; i <= 25; i++) {
  arr[i - 1] = i;
}
console.log(arr);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (const i of arr) {
  console.log(`Numero ${i} dividido por 2 = ${i / 2}`);
}
