import { Animal } from "./Animal.js";

export class Dog extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }5

  makeSound() {
    console.log(`Собака ${this.name} говорит: "Гав!"`);
  }
  
  printInfo() {
    super.printInfo();
    console.log(`Хозяин: ${this.owner}`);
  }
}