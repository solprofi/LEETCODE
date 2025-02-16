/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Every element is shifted by k mod len with
// the help of extra arr
const rotate = (nums, k) => {
  const steps = k % nums.length;
  const rotatedArr = [];

  for (let i = 0; i < nums.length; i++) {
    rotatedArr[(i + steps) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedArr[i];
  }
}

const rotate2 = (nums, k) => {
  const steps = k % nums.length;

  const rotatedArr = [...nums.slice(-steps), ...nums.slice(0, nums.length - steps)];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedArr[i];
  }
}

const reversePortion = (nums, start, end) => {
  let left = start;
  let right = end;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

const rotate3 = (nums, k) => {
  const steps = k % nums.length;

  reversePortion(nums, 0, nums.length - 1);
  reversePortion(nums, 0, steps - 1);
  reversePortion(nums, steps, nums.length - 1);
}