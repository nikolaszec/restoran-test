import Product from "./Product";
export default class Drink extends Product {
  constructor(name, volume) {
    super(name);
    this.volume = volume;
    this.generatePrice(150, 500);
  }
}
