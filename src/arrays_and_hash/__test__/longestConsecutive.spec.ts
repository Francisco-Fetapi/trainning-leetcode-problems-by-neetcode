import { longestConsecutive } from "../longestConsecutive";

const case1 = [1, 3, 14, 4, 15, 2, 22];
const case2 = [1, 3, 143, 4, 15, 22];

describe("Longest Consecutive", () => {
  it("First Solution", () => {
    let res1 = longestConsecutive(case1);
    let res2 = longestConsecutive(case2);
    expect(res1).toBe(4);
    expect(res2).toBe(2);
  });
});
