/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  // each candidate can be used any number of times

  // for each one check make a decision take / not take
  // -- if taken, update currSum
  // -- else update index only

  const result = [];

  const getSubsets = (index, subset, total) => {
    if (total === target) {
      result.push([...subset]);
      return;
    }

    if (index >= candidates.length || total > target) {
      return;
    }

    subset.push(candidates[index]);
    getSubsets(index, subset, total + candidates[index]);
    subset.pop();

    getSubsets(index + 1, subset, total);
  }

  getSubsets(0, [], 0);

  return result;
}