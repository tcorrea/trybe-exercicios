const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA(names) {
  return names.reduce((acc, current) => {
    return acc + (current.toLowerCase().split('a').length - 1);
  }, 0);
}

console.log(containsA(names));