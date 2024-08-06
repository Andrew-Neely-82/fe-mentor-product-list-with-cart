export class Cart {
  constructor(cart) {
    this.items = cart?.items || {};
    this.total = cart?.total || 0;
  }

  addItem(itemName, itemPrice, itemImage) {
    if (this.items[itemName]) {
      this.items[itemName].quantity += 1;
    } else {
      this.items[itemName] = { quantity: 1, price: itemPrice, image: itemImage };
    }
    this.total += 1;
  }

  removeItem(itemName) {
    if (this.items[itemName]) {
      this.items[itemName].quantity -= 1;
      this.total -= 1;
      if (this.items[itemName].quantity === 0) {
        delete this.items[itemName];
      }
    }
  }

  clearItem(itemName) {
    if (this.items[itemName]) {
      this.total -= this.items[itemName].quantity;
      delete this.items[itemName];
    }
  }

  getItems = () => this.items;
  getTotal = () => this.total;
}
