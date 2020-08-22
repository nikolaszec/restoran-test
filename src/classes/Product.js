export default class Product {
  constructor(name) {
    this.name = name;
    this.price = 0;
  }

  generatePrice = (min, max) => {
    this.price = Math.floor(Math.random() * (max - min + 1) + min);
  };
}
