import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, isHighlyCarbonated) {
    super(name, size, price, temperature);
    this.isHighlyCarbonated = isHighlyCarbonated;
  }

  getInfo() {
    const drink = super.getInfo();
    return { ...drink, isHighlyCarbonated: this.isHighlyCarbonated };
  }
}