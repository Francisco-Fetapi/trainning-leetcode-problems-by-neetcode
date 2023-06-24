import { decode, encode } from "./arrays_and_hash/encodeAndDecodeStrings";

const array = ["Francisco", "Camalata", "Fuayenda", "Fetapi"];
let res = encode(array, "-");

let res2 = decode(res, "-");

console.log(res);
console.log(res2);

export {};
