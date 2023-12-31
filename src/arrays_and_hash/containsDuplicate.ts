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
 * Time Complexity: O(Nlog(N))
 * Space Complexity: O(1)
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

/**
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 *
 */
export function containsDuplicate3(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}
