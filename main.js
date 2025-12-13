import { Dog } from "./Dog.js"
import { Bird } from "./Bird.js"

const homework5 = await import("./homework-5.js");
const homework6 = await import("./homework-6.js");
const homework7 = await import("./homework-7.js");
const homework8 = await import("./homework-8.js");
const homework9 = await import("./homework-9.js");

// ЗАДАНИЕ 5
// Покраска первой карточки

const blueColorHash = '#00BFFF';
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card-btn');

changeColorFirstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Покраска всех карточек

const orangeColorHash = '#FF8C00';
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsBtn = document.querySelector('#change-color-cards-btn');

changeColorAllCardsBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = orangeColorHash)
})

// Открыть Google

const googleURL = 'https://www.google.com';
const openGoogleBtn = document.querySelector('#open-google-btn');

openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open(googleURL);
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogBtn = document.querySelector('#output-console-log-btn')

outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Вывод контент элемента в консоль лог при наведении

const title = document.querySelector('.title')

title.addEventListener('mouseover', () => {
  console.log(title.textContent);
})

// Перекрашивание кнопки с одного цвета на другой

const changeColorBtn = document.querySelector('#change-color-btn');

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('bg-silver');
})


// ЗАДАНИЕ 10
// 3. Создание структуры

const dog = new Dog("Чарли", 5, "Евгений");
dog.makeSound();
dog.printInfo();

const parrot = new Bird("Оливер", 2, true);2
parrot.fly();
parrot.makeSound();
parrot.printInfo();