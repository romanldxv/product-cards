import * as homework5 from "./homework-5.js"
import * as homework6 from "./homework-6.js"
import * as homework7 from "./homework-7.js"
import * as homework8 from "./homework-8.js"
import * as homework9 from "./homework-9.js"

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

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("Животное издаёт звук");
  }

  printInfo() {
    console.log(`Имя: ${this.name} возраст: ${this.age}`);
  }
}

class Dog extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }

  makeSound() {
    console.log(`Собака ${this.name} говорит: "Гав!"`);
  }
  
  printInfo() {
    super.printInfo();
    console.log(`Хозяин: ${this.owner}`);
  }
}

class Bird extends Animal {
  constructor(name, age, isCanFly) {
    super(name, age);
    this.isCanFly = isCanFly;
  }

  fly() {
    if (this.isCanFly)
      console.log(`${this.name} полетел!`);
    else
      console.log(`${this.name} не умеет летать!`);
  }

  makeSound() {
    console.log(`${this.name} говорит: "Чирик!"`);
  }

  printInfo() {
    super.printInfo();
    console.log(`Умеет летать: ${this.isCanFly}`);
  }
}

const dog = new Dog("Чарли", 5, "Евгений");
dog.makeSound();
dog.printInfo();

const parrot = new Bird("Оливер", 2, true);2
parrot.fly();
parrot.makeSound();
parrot.printInfo();