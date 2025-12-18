import { Drink } from "./Drink.js";

export class Tea extends Drink {
  #temperature;

  constructor(name, size, price, temperature, type, leavesType, milkType) {
    super(name, size, price, temperature);
    this.#temperature = temperature;
    this.type = type;
    this.leavesType = leavesType;
    this.milkType = milkType;
  }

  getInfo() {
    const drink = super.getInfo();
    return { ...drink, type: this.type, leavesType: this.leavesType, milkType: this.milkType };
  }

  #makeDrink() {
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) готовится...`);
    this.setTemperature(this.#temperature + 30);
    this.setTemperature(this.#temperature);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) приготовлен!`);
  }

  serveDrink() {
    this.#makeDrink();
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) передаётся...`);
    console.log(`Напиток ${this.name} ${this.size} мл (${this.price}₽) был подан!`);
  }
}