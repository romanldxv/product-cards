import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";

import { Dog } from "./homework-10/Dog.js"
import { Bird } from "./homework-10/Bird.js"

import { Coffee } from "./homework-11/Coffee.js"
import { Tea } from "./homework-11/Tea.js";
import { Lemonade } from "./homework-11/Lemonade.js";
import { Cafe } from "./homework-11/Cafe.js";


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


// ЗАДАНИЕ 11

const cafeLite = new Cafe("Cafe Lite", "Россия, Челябинская область, г.Челябинск, Блюхера 1А");
const duchess = new Lemonade("Дюшес", 500, 60, 10, true);
const blackTea = new Tea("Чёрный чай", 200, 40, 50, "Чёрный", "Гранулированный", "Растительное");
const cappuccino = new Coffee("Капучино", 300, 100, 50, "Арабика", "Растительное");

console.log(cafeLite.getInfo());
cafeLite.orderDrink(duchess);
cafeLite.orderDrink(blackTea);
cafeLite.orderDrink(cappuccino);