const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    return `${ifScope} ótimo, fui utilizada no escopo !`;
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    return elseScope;
  }
};
console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(
  `Os números ${oddsAndEvens.sort(
    (a, b) => a - b
  )} se encontram ordenados de forma crescente!`
);

const fatorial = (n) => (n > 1 ? fatorial(n - 1) * n : 1);
console.log(fatorial(6));

const longestWord = (sentence) => {
    return sentence.split(' ').reduce((a,b) =>  a.length > b.length ? a : b);    
}
const sentence = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(longestWord(sentence)); // retorna 'aconteceu'

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const clickCount = document.getElementById('count');
    clickCount.innerHTML = parseInt(clickCount.innerHTML) + 1;
});
