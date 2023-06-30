export function longestConsecutive(nums: number[]): number {
  let numsSet = new Set(nums);
  let maxSequence = 0;

  for (let i in nums) {
    let isTheFirst = !numsSet.has(nums[i] - 1);
    if (isTheFirst) {
      let j = 0;
      while (numsSet.has(nums[i] + j)) {
        j++;
      }
      maxSequence = Math.max(maxSequence, j);
    }
  }

  return maxSequence;
}
