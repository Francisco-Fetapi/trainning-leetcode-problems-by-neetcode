export function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countS: Record<string, number> = {};
  const countT: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (let letter in countS) {
    if (countS[letter] !== countT[letter]) {
      return false;
    }
  }

  return true;
}

export function isAnagram2(s: string, t: string): boolean {
  let sSorted = [...s].sort().join("");
  let tSorted = [...t].sort().join("");

  return sSorted === tSorted;
}
