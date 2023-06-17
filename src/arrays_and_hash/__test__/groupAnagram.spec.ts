import { groupAnagrams } from "../groupAnagrams";

const case1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

describe("isAnagram", () => {
  it("First Solution", () => {
    expect(String(groupAnagrams(case1))).toBe("bat,eat,tea,ate,tan,nat");
  });
});
