import { Animal } from "./Animal.js";

export class Bird extends Animal {
  constructor(name, age, canFly) {
    super(name, age);
    this.canFly = canFly;
  }

  fly() {
    if (this.canFly)
      console.log(`${this.name} полетел!`);
    else
      console.log(`${this.name} не умеет летать!`);
  }

  makeSound() {
    console.log(`${this.name} говорит: "Чирик!"`);
  }

  printInfo() {
    super.printInfo();
    console.log(`Умеет летать: ${this.canFly}`);
  }
}