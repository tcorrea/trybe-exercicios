function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();


// Exercicio 1
function holidayAndFriday() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let days = document.getElementById("days");

  for (const day of dezDaysList) {
    let li = document.createElement("li");
    li.innerText = day;
    li.className = "day";

    if (day === 24 || day === 25 || day === 31) {
      li.className = `${li.className} holiday`;
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      li.className = `${li.className} friday`;
    }
    days.appendChild(li);
  }
}

holidayAndFriday();

// Exercicio 2
function createBtnHoliday(btnName) {
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = btnName;
  document.querySelector(".buttons-container").appendChild(btn);
}
createBtnHoliday("Feriados");

// Exercicio 3
function changeBgHolidays() {
  let holidays = document.querySelectorAll(".holiday");

  for (const holiday of holidays) {
    if (holiday.style.backgroundColor == 'rgb(204, 204, 204)') {
      holiday.style.backgroundColor = "rgb(238,238,238)"
    }else{
      holiday.style.backgroundColor = 'rgb(204, 204, 204)'
    }
  }
}

let btnHoliday = document.getElementById("btn-holiday");

btnHoliday.addEventListener("click", changeBgHolidays);

// Exercicio 4
function createBtnFriday(btnName) {
  let btn = document.createElement("button");
  btn.id = "btn-friday";
  btn.innerText = btnName;
  document.querySelector(".buttons-container").appendChild(btn);
}
createBtnFriday("Sexta-feira");

// Exercicio 5
function changeBgFriday() {
  let fridays = document.querySelectorAll(".friday");
  
  // FIXME: Fazer logica inversa
  // let count =0;  
  // if (fridays[0].innerText == 'SEXTOU') {
  //   // Não esta funcionando dessa forma
  //   for (const friday of [4, 11, 18, 25]) {
  //     fridays[count].innerText = friday;
  //     console.log(fridays[count]);
  //     console.log(friday);
  //     count++;
  //   }

  // }

  // if (fridays[0].innerText != 'SEXTOU') {
  //   for (const friday of fridays) {
  //     friday.innerText = 'SEXTOU';
  //   }
  // }
  friday.innerText = 'SEXTOU';
}

let btnFriday = document.getElementById("btn-friday");

btnFriday.addEventListener("click", changeBgFriday);

// Exercicio 6