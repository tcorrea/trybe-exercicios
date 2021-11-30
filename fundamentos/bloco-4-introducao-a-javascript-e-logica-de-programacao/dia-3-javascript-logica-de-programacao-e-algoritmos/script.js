// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// n = 5

// *****
// *****
// *****
// *****
// *****
let n = 5;
let space = "\xa0";

for (let i = 0; i < n; i++) {
  console.log("*".repeat(n));
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****
for (let i = n; i > 0; i--) {
  console.log(space.repeat(i - 1) + "*".repeat(n - i + 1));
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****
for (let i = n; i > 0; i-=2) {
    console.log(space.repeat((i-1)/2) + "*".repeat(n - i + 1) + space.repeat((i-1)/2));
}
