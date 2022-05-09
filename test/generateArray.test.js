import { randomNumber, generateArray } from "../randomArray.js";
import { assert } from "chai";

describe("generate random array of given length", () => {
  const makeTest = () => {
    let length = randomNumber(1, 10);
    it("checks if length is number", () => {
      assert.isNumber(length);
    });

    it(`checks if array is of length ${length}`, () => {
      assert.lengthOf(generateArray(length), length);
    });
  };

  for (let x = 1; x <= 5; x++) {
    makeTest();
  }
});
