// EXERCICIO 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const myFunc = (fullName) => {
  return { 
    nomeCompleto: fullName,
    email: `${fullName}@trybe.com`.replace(' ', '_').toLowerCase(),
  }; 
};

console.log(newEmployees(myFunc));

// EXERCICIO 2
const sorteio = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  if (callback(number, randomNumber)){
    console.log('Parabéns você ganhou');
    return
  }
  console.log('Tente novamente');
};

sorteio(5, (n1, n2) => {
  return n1 === n2;
});

// EXERCICIO 3

const RIGHT_ANSWERS =   ['A', 'C',    'B', 'D', 'A', 'A', 'D',    'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A',  'B', 'D', 'A', 'C', 'N.A',  'A', 'D', 'B'];

const myHOF = (arrGabarito, arrVerificar, callback) => {
  return callback(arrGabarito, arrVerificar);
};

const checkGabarito = (arrGabarito, arrVerificar) => {

  let count = 0;

  for (let i = 0; i < arrGabarito.length; i += 1){
    if (arrGabarito[i] === arrVerificar[i]){
      count += 1;
    }else if(arrVerificar[i] !== 'N.A'){
      count -= 0.5;
    }
  }
  return count;
};

console.log(myHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGabarito));