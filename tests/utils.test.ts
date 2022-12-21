import { fibonacci } from "../src";

test("fibonacci function", () => {
  expect(fibonacci(10)).toEqual(89);
});
