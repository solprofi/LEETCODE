/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
  const result = [];

  nums.sort((a, b) => a - b);

  const getSubsets = (index, subset) => {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    getSubsets(index + 1, subset);
    subset.pop();

    let skipDuplicatesIndex = index;
    while (nums[skipDuplicatesIndex] === nums[skipDuplicatesIndex + 1]) {
      skipDuplicatesIndex++;
    }

    getSubsets(skipDuplicatesIndex + 1, subset);
  }

  getSubsets(0, []);
  return result;
};