import { decode, encode } from "../encodeAndDecodeStrings";

const case1 = ["Francisco", "Camalata", "Fuayenda", "Fetapi"];

describe("Encode And Decode Strings", () => {
  it("First Solution", () => {
    let res = encode(case1, "-");
    let res2 = decode(res, "-");

    expect(res2).toEqual(case1);
  });
});
