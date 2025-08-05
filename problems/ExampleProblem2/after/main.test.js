const { add } = require("./main");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
