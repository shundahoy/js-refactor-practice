// printOwing.test.js
const { printOwing } = require("./main");

describe("printOwing", () => {
  let originalClock;

  beforeAll(() => {
    // Clock.today を固定
    originalClock = global.Clock;
    global.Clock = { today: new Date(2025, 0, 1) }; // 2025-01-01
  });

  afterAll(() => {
    global.Clock = originalClock;
  });

  it("should print the correct owing statement", () => {
    const invoice = {
      customer: "John Doe",
      orders: [{ amount: 10 }, { amount: 20 }, { amount: 5 }],
    };

    // console.log をモック
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    printOwing(invoice);

    expect(logSpy).toHaveBeenNthCalledWith(1, "***********************");
    expect(logSpy).toHaveBeenNthCalledWith(2, "**** Customer Owes ****");
    expect(logSpy).toHaveBeenNthCalledWith(3, "***********************");
    expect(logSpy).toHaveBeenNthCalledWith(4, "name: John Doe");
    expect(logSpy).toHaveBeenNthCalledWith(5, "amount: 35");
    expect(logSpy).toHaveBeenNthCalledWith(6, "due: 1/31/2025");

    logSpy.mockRestore();
  });
});
