function isOdd(n1, n2, n3) {
  if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    return true;
  }
  return false;
}

function isEven(n1, n2, n3) {
  if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0) {
    return true;
  }
  return false;
}

console.log(isOdd(13, 11, 9)); // false
console.log(isOdd(11, 11, 8)); // true
console.log(isEven(2, 11, 10)); // true
console.log(isEven(2, 4, 8)); // false
