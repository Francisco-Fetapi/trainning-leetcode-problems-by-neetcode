/**
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 */
export function containsDuplicate1(nums: number[]): boolean {
  const hashset = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) {
      return true;
    }
    hashset.add(nums[i]);
  }
  return false;
}

/**
 *
 * Time Complexity:
 * Space Complexity:
 *
 */
export function containsDuplicate2(nums: number[]): boolean {
  nums.sort();

  for (let current = 0; current < nums.length - 1; current++) {
    let next = current + 1;
    if (nums[current] === nums[next]) {
      return true;
    }
  }

  return false;
}
