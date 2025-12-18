import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  #temperature;

  constructor(name, size, price, temperature, grainsType, milkType) {
    super(name, size, price, temperature);
    this.#temperature = temperature;
    this.grainsType = grainsType;
    this.milkType = milkType;
  }

  getInfo() {
    const drink = super.getInfo();
    return { ...drink, grainsType: this.grainsType, milkType: this.milkType };
  }

  #makeDrink() {
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) готовится...`);
    this.setTemperature(this.#temperature + 10);
    this.setTemperature(this.#temperature);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) приготовлен!`);
  }

  serveDrink() {
    this.#makeDrink();
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) передаётся...`);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) был подан!`);
  }
}