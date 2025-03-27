/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const result = [];

  const getPermutations = (permutation, frequencyMap) => {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!frequencyMap[i]) {
        permutation.push(nums[i]);
        frequencyMap[i] = true;
        getPermutations(permutation, frequencyMap);

        permutation.pop();
        frequencyMap[i] = false;
      }
    }
  }

  getPermutations([], []);

  return result;
};