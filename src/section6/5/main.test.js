// src/sectionX/priceOrder.test.js
const { priceOrder } = require("./main");

describe("priceOrder", () => {
  it("should calculate total price without discount when quantity <= discountThreshold", () => {
    const product = {
      basePrice: 100,
      discountThreshold: 10,
      discountRate: 0.1,
    };
    const quantity = 5;
    const shippingMethod = {
      discountThreshold: 1000,
      discountedFee: 5,
      feePerCase: 10,
    };

    const total = priceOrder(product, quantity, shippingMethod);

    // basePrice = 100 * 5 = 500
    // discount = 0 (quantity <= threshold)
    // shipping = 5 * 10 = 50
    // total = 500 - 0 + 50 = 550
    expect(total).toBe(550);
  });

  it("should apply discount when quantity > discountThreshold", () => {
    const product = {
      basePrice: 200,
      discountThreshold: 5,
      discountRate: 0.2,
    };
    const quantity = 8;
    const shippingMethod = {
      discountThreshold: 2000,
      discountedFee: 20,
      feePerCase: 50,
    };

    const total = priceOrder(product, quantity, shippingMethod);

    // basePrice = 200 * 8 = 1600
    // discount = (8 - 5) * 200 * 0.2 = 3 * 200 * 0.2 = 120
    // shipping = basePrice(1600) <= 2000 → feePerCase = 50
    // shipping = 8 * 50 = 400
    // total = 1600 - 120 + 400 = 1880
    expect(total).toBe(1880);
  });

  it("should use discounted shipping fee when basePrice > shippingMethod.discountThreshold", () => {
    const product = {
      basePrice: 300,
      discountThreshold: 2,
      discountRate: 0.1,
    };
    const quantity = 10;
    const shippingMethod = {
      discountThreshold: 2000,
      discountedFee: 15,
      feePerCase: 40,
    };

    const total = priceOrder(product, quantity, shippingMethod);

    // basePrice = 300 * 10 = 3000 (> 2000 → discountedFee = 15)
    // discount = (10 - 2) * 300 * 0.1 = 8 * 300 * 0.1 = 240
    // shipping = 10 * 15 = 150
    // total = 3000 - 240 + 150 = 2910
    expect(total).toBe(2910);
  });
});
