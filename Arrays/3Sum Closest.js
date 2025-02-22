/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (input, target) => {
  // find 3sum value closest to the target
  // keep track of closest3Sum
  // if abs(currSum - target) < abs(closest3Sum - target), update closest3Sum
  const nums = [...input].sort((a,b) => a - b);

  let closest3Sum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const curr3Sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(curr3Sum - target) < Math.abs(closest3Sum - target)) {
        closest3Sum = curr3Sum;
      }

      if (curr3Sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest3Sum;
}