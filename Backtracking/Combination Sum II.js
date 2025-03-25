/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  candidates.sort((a,b) => a - b);

  const result = [];

  const getSubsets = (currSum, subset, index) => {
    if (index === candidates.length) {
      if (currSum === target) {
        result.push([...subset]);
      }

      return;
    }

    if (currSum > target) {
      return;
    }

    subset.push(candidates[index]);
    getSubsets(currSum + candidates[index], subset, index + 1);
    subset.pop();

    // skip all duplicate numbers
    let skipDuplicatesIndex = index;
    while (candidates[skipDuplicatesIndex] === candidates[skipDuplicatesIndex + 1]) {
      skipDuplicatesIndex++;
    }

    getSubsets(currSum, subset, skipDuplicatesIndex + 1);
  }

  getSubsets(0, [], 0);

  return result;
}