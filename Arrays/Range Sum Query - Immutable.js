// precompute all prefix sums in constructor in O(n) time
// so when trying to get sum range, we can do it in constant time with
// sumRange[i,j] = prefixSum[j] - prefixSum[i]

class NumArray {
  constructor(nums) {
    this.prefixSum = [0];

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.prefixSum.push(sum);
    }
  }

  sumRange(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}