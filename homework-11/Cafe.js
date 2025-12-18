export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return { name: this.name, location: this.location };
  }

  orderDrink(drink) {
    console.log(`Вы заказали напиток: ${drink.name}`);
    console.log(drink.getInfo());
    drink.serveDrink();
  }
}