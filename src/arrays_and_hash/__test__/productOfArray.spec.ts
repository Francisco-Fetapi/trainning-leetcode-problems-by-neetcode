import { productOfArray1, productOfArray2 } from "../productOfArray";

const case1 = [1, 2, 3, 4];

describe("isAnagram", () => {
  it("First Solution", () => {
    expect(productOfArray1(case1)).toEqual([24, 12, 8, 6]);
  });
  it("Second Solution", () => {
    expect(productOfArray2(case1)).toEqual([24, 12, 8, 6]);
  });
});
