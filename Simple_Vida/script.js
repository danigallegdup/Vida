let Birthday = new Date("2001-05-28");
let today = new Date();

let age = today.getFullYear() - Birthday.getFullYear();
if (today.getMonth() < Birthday.getMonth() || (today.getMonth() == Birthday.getMonth() && today.getDate() < Birthday.getDate())) {
    age--;
}

let weeks_age = (today - Birthday) / (1000 * 60 * 60 * 24 * 7);
let days_age = (today - Birthday) / (1000 * 60 * 60 * 24);
let hours_age = (today - Birthday) / (1000 * 60 * 60);

let nextBirthday = new Date(today.getFullYear(), Birthday.getMonth(), Birthday.getDate());
if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}
let weeks_til_next_birthday = (nextBirthday - today) / (1000 * 60 * 60 * 24 * 7);

// document.getElementById("age").innerHTML = age;
// document.getElementById("til_bday").innerHTML = weeks_til_next_birthday.toFixed(2);
// document.getElementById("weeks_lived").innerHTML = weeks_age.toFixed(2);

let gridContainer = document.querySelector('.grid-container');

// Create number line for rows
for (let i = 0; i <=   52; i++) {
  let box = document.createElement('div');
  box.className = 'number';
  box.textContent = i;
  gridContainer.appendChild(box);
}

// Create grid with number line for columns
for (let i = 1; i <= 100; i++) {
  for (let j = 0; j <= 52; j++) {
    let box = document.createElement('div');
    if (j === 0) {
      box.className = 'number';
      box.textContent = i;
    } else {
      box.className = 'box';
    }
    gridContainer.appendChild(box);
  }  
}
4
// Round weeks_age to a whole number
let roundedWeeksAge =1194;
// Math.round(weeks_age);

// Select all boxes
let boxes = document.querySelectorAll('.box');

// Color the first roundedWeeksAge boxes gold
for (let i = 0; i < roundedWeeksAge; i++) {
  boxes[i].style.backgroundColor = 'gold';
}