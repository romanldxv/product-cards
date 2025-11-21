import { productCards } from "./productCards.js";

// 3. Создание шаблона продуктовых карточек

const productCardTemplate = document.getElementById("product-card-template");
const productCardList = document.querySelector(".product-card-list");

showProductCards();

function formatPrice (price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productCardTitles = productCards.reduce((acc, card) => {
  return [...acc, card.title];
}, [])

console.log(productCardTitles.join("; "))

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const shortedCards = productCards.reduce((acc, card) => {
  return [...acc, { [`${card.title}`]: card.description }]
}, [])

console.log(shortedCards)

// 6. Функция, которая будет выводить заданное пользователем кол-во карточек

function showProductCards() {
  const cardQuantity = prompt("Сколько карточек отобразить? От 1 до 5");

  if (cardQuantity === null)
    alert("Вы не ввели число");
  else if (isNaN(cardQuantity % 2))
    alert("Пожалуйста, введите число!");

  if (cardQuantity >= 1 && cardQuantity <= 5) {
    for (let i = 0; i < cardQuantity; i++) {
      const card = productCards[i];

      const cardClone = productCardTemplate.content.cloneNode(true);

      cardClone.querySelector(".product-img").src = `img/${card.img.src}`;
      cardClone.querySelector(".product-img").alt = card.img.alt;
      cardClone.querySelector(".product-img").width = card.img.width;
      cardClone.querySelector(".product-img").height = card.img.height;

      cardClone.querySelector(".product-category").textContent = card.category;
      cardClone.querySelector(".card-title").textContent = card.title;
      cardClone.querySelector(".product-description").textContent = card.description;

      card.compound.forEach(element => {
        const li = document.createElement("li");
        li.className = "product-compound-item";
        li.textContent = element;
        cardClone.querySelector(".product-compound").appendChild(li);
      });

      cardClone.querySelector(".product-price").innerHTML = `${formatPrice(card.price)} &#x20BD;`;
      productCardList.appendChild(cardClone);
    }
  } else {
    alert("Пожалуйста, введите число от 1 до 5");
  }
}

