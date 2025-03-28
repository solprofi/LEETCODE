/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  // each number from 1 to 9 can only be used once

  // backtrack(currentNumber, subset, currSum)
  // for each number consider take / not take
  // -- if take, update subset, currSum, move on to next num
  // -- if not take, move on to next num

  // BC: if currSum = n && length = k, save copy to result
  // BC: currentNumber > 9 || sum > k, return

  const result = [];

  const getSubsets = (currentNumber, subset, currSum) => {
    if (currSum === n) {
      result.push([...subset]);
      return;
    }

    if (currSum > n || currentNumber > 9) {
      return;
    }

    subset.push(currentNumber);
    getSubsets(currentNumber + 1, subset, currSum + currentNumber);
    subset.pop();

    getSubsets(currentNumber + 1, subset, currSum);
  }

  getSubsets(1, [], 0);

  return result;
}
