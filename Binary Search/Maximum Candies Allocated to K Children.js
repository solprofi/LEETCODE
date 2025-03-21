const canGetKPilesOfCandies = (k, pileSize, candies) => {
  let pileCount = 0;

  for (const candyCount of candies) {
    pileCount += Math.floor(candyCount / pileSize);
  }

  return pileCount >= k;
}

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = (candies, k) => {
  let left = 1;
  let right = Math.max(...candies);

  let result = 0;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (canGetKPilesOfCandies(k, mid, candies)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};