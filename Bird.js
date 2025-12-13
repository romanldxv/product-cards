import { Animal } from "./Animal.js";

export class Bird extends Animal {
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