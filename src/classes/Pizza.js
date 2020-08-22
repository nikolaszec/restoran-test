import Food from "./Food";
export default class Pizza extends Food {
  constructor(name) {
    super(name);
    this.generatePrice(300, 600);
  }
}
