// switch (5) {
//   case 0:
//     console.log("a for apple");
//     break;
//   case 1:
//     console.log("c for cat");
//     break;
//   default:
//     console.log("try me later");
// }

// let favFood = "Rice";
// console.log(`My favrite food is ${favFood}`);
// console.log(typeof favFood);

// let students = 30;
// students += 2;

// console.log(students);

// let username;
// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myUser").value;

//   document.getElementById("m1").textContent = `Welcome back ${username}`;
//   console.log(username);
// };

// const PI = 3.149;
// let radius;
// let circumference;

// radius = Number(radius);
// circumference = 2 * PI * radius;

// document.getElementById("mySubs").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myAns").textContent = circumference + " cm";
// };

// const deBtn = document.getElementById("deBtn");
// const reBtn = document.getElementById("reBtn");
// const inBtn = document.getElementById("inBtn");
// const counter = document.getElementById("counter");
// let count = 0;

// deBtn.onclick = function () {
//   count--;
//   counter.textContent = count;
// };
// inBtn.onclick = function () {
//   count++;
//   counter.textContent = count;
// };
// reBtn.onclick = function () {
//   count = 0;
//   counter.textContent = count;
// };

const myText = document.getElementById("myText");
const myFinal = document.getElementById("myFinal");
const myResp = document.getElementById("myResp");
let age;

myFinal.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 18) {
    myResp.textContent = `You're welcome`;
  } else {
    myResp.textContent = `You're not eligible to join this site`;
  }
};

const subscribe = document.getElementById("subscribe");
const visaBtn = document.getElementById("visaBtn");
const masterCardbtn = document.getElementById("masterCardbtn");
const verveBtn = document.getElementById("verveBtn");
const theSubmit = document.getElementById("theSubmit");
const subResponse = document.getElementById("subResponse");
const payResponse = document.getElementById("payResponse");

theSubmit.onclick = function () {
  if (subscribe.checked) {
    subResponse.textContent = "You're subcribed";
  } else {
    subResponse.textContent = "You're NOT subcribed";
  }
  if (visaBtn.checked) {
    payResponse.textContent = "You're paying with VISA";
  } else if (masterCardbtn.checked) {
    payResponse.textContent = "You're paying with MASTERCARD";
  } else if (verveBtn.checked) {
    payResponse.textContent = "You're paying with VERVE";
  } else {
    payResponse.textContent = "YOU NEED TO SELECT A PAYMENT OPTION";
  }
};

const myName = ["lola", "bimpe", "sola", "osi"];
console.log(myName.length);

for (let y = 0; y < myName.length; y++) {
  console.log(myName[y]);
}

let number = 8;

function isEven(number) {
  if (number % 2 === 0) {
    ("true");
  } else {
  }
  return number;
}

function greet(name) {
  return "hello" + name;
}
console.log(greet(" paiul"));

const ages = [22, 13, 19, 29, 78, 65, 98, 77];
// for each is for looping through an array

ages.forEach(function (age, index, best) {
  console.log(age);
  console.log(index);
  console.log(best);
});

// filter is for sorting out preference
const canBuy = ages.filter(function (age) {
  if (age >= 22) {
    return true;
  }
});
console.log(canBuy);
//
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumOfNumber = numberArray.reduce(function (total, value) {
  return total + value;
});
console.log(sumOfNumber);

// task 2 even number
const evenNumber = numberArray.filter(function (numbs) {
  if (numbs % 2 === 0) {
    return true;
  }
});
console.log(evenNumber);

// task 3 square root
const squareRoot = numberArray.map(function (value, index, array) {
  return value ** 2;
});
console.log(squareRoot);

let d = new Date();
console.log(d);
let f = d.toDateString();
console.log(f);

const dBody = document.querySelector(".dbody");

dBody.setAttribute("style", "background-color: yellow");

const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobilenav");
const hambg = document.querySelector("#hambg");
const canc = document.querySelector("#canc");

const disHam = function () {
  mobilenav.classList.toggle("mobilenav");
  hambg.classList.toggle("hidehide");
  canc.classList.toggle("hidehide");
};
hamburger.addEventListener("click", disHam);

const galleryImage = document.querySelector(".gallery-image");
const nextImage = document.querySelector("#nextImage");
const enLarge = function () {
  galleryImage.classList.toggle("enlarged");
  nextImage.classList.toggle("enlarged");
};
galleryImage.addEventListener("click", enLarge);

const form = document.querySelector(".form");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const conPassword = document.querySelector(".conPassword");

function formValidation(e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const conPasswordValue = conPassword.value.trim();

  if (usernameValue === "") {
    const userCOn = username.parentElement;
    const span = userCOn.querySelector("span");
    span.textContent = "The username cannot be empty";
    userCOn.classList.add("error");
  }else{
    const userCOn = username.parentElement;
    userCOn.classList.add('success')


  }
}
form.addEventListener("submit", formValidation);
