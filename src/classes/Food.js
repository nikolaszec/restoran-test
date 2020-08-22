import Product from "./Product";
export default class Food extends Product {
  constructor(name) {
    super(name);
    this.additions = [];
  }

  addAddition = (addition) => {
    this.additions.push(addition);
    this.price += addition.price;
  };
}
