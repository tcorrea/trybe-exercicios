const a = 80;
const b = 80;
const c = 20;

function isTriangle(anguloA, anguloB, anguloC) {
  if (anguloA >= 0 && anguloB >= 0 && anguloC >= 0) {
    return anguloA + anguloB + anguloC == 180 ? true : false;
  }
  return "Ãngulo invalido";
}

console.log(isTriangle(a, b, c));
