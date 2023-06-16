export function twoSum1(nums: number[], target: number) {
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[left] + nums[right] === target) {
        return [left, right];
      }
    }
  }

  return [];
}

export function twoSum2(nums: number[], target: number) {
  const numbers: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];

    if (res in numbers) {
      return [numbers[res], i];
    }
    numbers[nums[i]] = i;
  }
}
