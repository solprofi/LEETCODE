/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  // generate all subsets of a given array
  // store them in the result array

  // for each number there is a choice:
  // -- include it in the subset array
  // -- skip it

  // use a recursive approach
  // f(currIterationIndex, subsetArray)
  // for each index consider adding it to subset and skipping
  // call f for the next index

  const result = [];

  const getAllSubsets = (i, currSubset) => {
    if (i >= nums.length) {
      result.push([...currSubset]);
      return;
    }

    // add curr number to subset
    currSubset.push(nums[i]);
    getAllSubsets(i + 1, currSubset);

    // skip current number
    currSubset.pop();
    getAllSubsets(i + 1, currSubset);
  }

  getAllSubsets(0, []);

  return result;
}