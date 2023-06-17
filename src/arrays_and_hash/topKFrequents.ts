export function topKFrequents(nums: number[], k: number): number[] {
  const count: Record<string, number> = {};
  const frequency: number[][] = [[]];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = 1 + (count[nums[i]] || 0);
  }

  for (let num in count) {
    let freq = count[num];
    if (!frequency[freq]) {
      frequency[freq] = [];
    }
    frequency[freq].push(+num);
  }

  let res = [];

  mainLoop: for (let i = frequency.length - 1; i >= 0; i--) {
    let listNumbers = frequency[i];
    for (let j = 0; j < listNumbers.length; j++) {
      res.push(listNumbers[j]);
      if (res.length === k) {
        break mainLoop;
      }
    }
  }

  return res;
}
