export function encode(strs: string[], symb: string) {
  let encoded = "";

  for (let key in strs) {
    let str = strs[key];
    encoded += str.length + symb + str;
  }

  return encoded;
}

export function decode(str: string, symb: string) {
  const strs: string[] = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    while (str[j] !== symb) {
      j++;
    }
    let wordSize = +str.substring(i, j);
    let word = str.substring(j + 1, j + 1 + wordSize);
    strs.push(word);
    i = j + 1 + wordSize;
  }

  return strs;
}
