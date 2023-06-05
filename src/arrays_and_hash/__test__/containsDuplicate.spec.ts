import {
  containsDuplicate1,
  containsDuplicate2,
  containsDuplicate3,
} from "../containsDuplicate";

const case1 = [1, 2, 3, 1];
const case2 = [0, 2, 3, 1, 0, 1];
const case3 = [0, 2, 3, 1];
const case4 = [0, 0, 0, 0];

describe("ContainsDuplicate", () => {
  it("First Solution", () => {
    expect(containsDuplicate1(case1)).toBe(true);
    expect(containsDuplicate1(case2)).toBe(true);
    expect(containsDuplicate1(case3)).toBe(false);
    expect(containsDuplicate1(case4)).toBe(true);
  });
  it("Second Solution", () => {
    expect(containsDuplicate2(case1)).toBe(true);
    expect(containsDuplicate2(case2)).toBe(true);
    expect(containsDuplicate2(case3)).toBe(false);
    expect(containsDuplicate2(case4)).toBe(true);
  });
  it("Third Solution", () => {
    expect(containsDuplicate3(case1)).toBe(true);
    expect(containsDuplicate3(case2)).toBe(true);
    expect(containsDuplicate3(case3)).toBe(false);
    expect(containsDuplicate3(case4)).toBe(true);
  });
});
