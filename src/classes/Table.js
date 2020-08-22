export default class Table {
  constructor(name) {
    this.name = name;
    this.itemsToOrder = [];
  }

  addItem = (item) => {
    this.itemsToOrder.push(item);
  };
}
