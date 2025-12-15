export class Animal {
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