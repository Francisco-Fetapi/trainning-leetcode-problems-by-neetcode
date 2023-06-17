export function groupAnagrams(strs: string[]) {
  const anagrams: Record<number, string[]> = {};

  strs.forEach((str) => {
    let charCodeString = [...str].reduce((acc, _, index) => {
      return acc + str.charCodeAt(index);
    }, 0);

    if (anagrams[charCodeString]) {
      anagrams[charCodeString].push(str);
    } else {
      anagrams[charCodeString] = [str];
    }
  });

  return Object.values(anagrams);
}
