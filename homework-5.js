// 3) функция, принимающая город и тмпературу и выводящая информационное сообщение в консоль

function showCityTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

showCityTemperature("Каир", 42);

// 4) Функция, которая делает проверку введенной скорости: она больше звуковой или меньше, и выводит соответсвующее сообщение

const SPEED_OF_SOUND = 343;

function checkSpeed(speed) {
  if (speed > SPEED_OF_SOUND) {
    console.log("Сверхзвуковая скорость");
  } else {
    console.log("Дозвуковая скорость");
  }
}

checkSpeed(200);

// 5) Функция, которая проверяет, хватает нам средств или нет. Если не хватает - считаем недостающую сумму и выводим. Хватает - выводим сообщение

const productName = "Хлеб";
const productPrice = 2;

function buyItem(budget) {
  if (productPrice < budget) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс`);
  }
}

buyItem(1);

// 6) Создание функции и её именование

function printInfo(name = "Неизвестно", age = "Неизвестно", post = "Неизвестно") {
  console.log(`Имя: ${name}\nВозраст: ${age}\nДолжность: ${post}`);
}

printInfo("Роман", 19);

// 7) Создание 3-х переменных и их именование

const name = "Andrew";
const post = "TeamLead";
const isMarried = false;