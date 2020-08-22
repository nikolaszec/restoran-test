export default class Order {
  constructor(table) {
    this.table = table;
    this.payed = false;
    this.total = 0;
  }

  getTotalAmmount = () => {
    for (let i = 0; i < this.table.itemsToOrder.length; i++) {
      let item = this.table.itemsToOrder[i];
      this.total += item.price;
    }
    return `Total ammont for ${this.table.name} is ${this.total}`;
  };
}
