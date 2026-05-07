// const add = require("../src/stringCalculator");

// test("returns 0 for empty string", () => {
//   expect(add("")).toBe(0);
// });
const add = require("../src/stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number when single number is passed", () => {
  expect(add("1")).toBe(1);
});
