function convertGrades(percentageGrade) {
  if (percentageGrade > 100 || percentageGrade < 0) {
    return "Erro. Nota invalida";
  } else if (percentageGrade >= 90) {
    return "A";
  } else if (percentageGrade >= 80) {
    return "B";
  } else if (percentageGrade >= 70) {
    return "c";
  } else if (percentageGrade >= 60) {
    return "D";
  } else if (percentageGrade >= 50) {
    return "E";
  } else if (percentageGrade < 50) {
    return "F";
  }
}

console.log(convertGrades(-2));
console.log(convertGrades(111));
console.log(convertGrades(90));