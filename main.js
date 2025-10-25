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