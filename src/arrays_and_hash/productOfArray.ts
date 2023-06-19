export function productOfArray1(nums: number[]) {
  const prefixes: number[] = [];
  const postfixes: number[] = [];

  let prefix = 1;
  for (let i in nums) {
    prefix = prefix * nums[i];
    prefixes[i] = prefix;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix = postfix * nums[i];
    postfixes[i] = postfix;
  }

  let res: number[] = [];

  for (let i in nums) {
    let myPrefix = prefixes[+i - 1] || 1;
    let myPostfix = postfixes[+i + 1] || 1;
    res[i] = myPrefix * myPostfix;
  }

  return res;
}

export function productOfArray2(nums: number[]) {
  let res: number[] = [1];

  let prefix = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    prefix = prefix * nums[i];
    res[i + 1] = prefix;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    postfix = postfix * nums[i];
    res[i - 1] = postfix;
  }

  console.log(res);
  // 24, 12, 8,6
  return res;
}
