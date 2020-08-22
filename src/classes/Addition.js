import Food from "./Food";
export default class Addition extends Food {
  constructor(name) {
    super(name);
    this.generatePrice(20, 100);
  }
}
