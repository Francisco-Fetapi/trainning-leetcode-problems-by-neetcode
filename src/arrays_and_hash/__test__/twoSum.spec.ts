import { twoSum1, twoSum2 } from "../twoSum";

type Case = [number[], number];

const case1: Case = [[1, 2, 3, 1], 5];
const case2: Case = [[0, 2, 3, 1, 0, 1], 4];
const case3: Case = [[0, 2, 3, 1], 4];

describe("TwoSum", () => {
  it("First Solution", () => {
    expect(twoSum1(...case1)).toEqual([1, 2]);
    expect(twoSum1(...case2)).toEqual([2, 3]);
    expect(twoSum1(...case3)).toEqual([2, 3]);
  });
  it("Second Solution", () => {
    expect(twoSum2(...case1)).toEqual([1, 2]);
    expect(twoSum2(...case2)).toEqual([2, 3]);
    expect(twoSum2(...case3)).toEqual([2, 3]);
  });
});
