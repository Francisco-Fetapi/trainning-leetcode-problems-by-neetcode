import { isAnagram1, isAnagram2 } from "../isAnagram";

type Case = [string, string];

const case1: Case = ["anagram", "nagaram"];
const case2: Case = ["rat", "car"];

describe("isAnagram", () => {
  it("First Solution", () => {
    expect(isAnagram1(...case1)).toBe(true);
    expect(isAnagram1(...case2)).toBe(false);
  });
  it("Second Solution", () => {
    expect(isAnagram2(...case1)).toBe(true);
    expect(isAnagram2(...case2)).toBe(false);
  });
});
