const a = 5;
const b = 10;
const c = 8;

function biggestNumber(x, y) {
  return x > y ? x : y;
}

function biggestNumber2(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

console.log(biggestNumber(a, b));
console.log(biggestNumber2(a, b, c));
