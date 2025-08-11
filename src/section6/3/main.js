function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingCost = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shippingCost;
}
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get price() {
    return this.basePrice - this.quantityDiscount + this.shippingCost;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shippingCost() {
    return Math.min(this.basePrice * 0.1, 100);
  }
}
