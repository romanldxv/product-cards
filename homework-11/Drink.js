export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    console.log(`Изменяется температура напитка ${this.name} с ${this.#temperature} на ${newTemperature}...`);
    this.#temperature = newTemperature;
    console.log("Температура напитка изменена!");
  }

  #makeDrink() {
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) готовится...`);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) приготовлен!`);
  }

  serveDrink() {
    this.#makeDrink()
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) передаётся...`);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) был подан!`);
  }
}