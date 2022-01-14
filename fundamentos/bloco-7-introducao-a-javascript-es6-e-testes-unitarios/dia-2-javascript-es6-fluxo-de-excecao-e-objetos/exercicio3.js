const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

Object.assign(lesson2, {turno: 'noite'});

function listKeysObject(object){
  Object.keys(object).map((key) => console.log(key));
}

const objectSize = (object) => console.log(Object.keys(object).length);

const listValues = (object) => Object.values(object).map((value) => console.log(value));

listKeysObject(lesson3);
objectSize(lesson1);
listValues(lesson2);

const allLessons = {};

Object.assign(allLessons, {lesson1:lesson1}, {lesson2:lesson2}, {lesson3:lesson3});

console.log(allLessons);

function allStudents(object){
  // FIXME: 
  // Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
  // Tem que ser dinamico
  let acc = 0;
  Object.entries(object).map((arr) => {
    for (let i of arr){
      acc =+ i.numeroEstudantes;
    }
  });
  
  return acc;
}

console.log(allStudents(allLessons));

