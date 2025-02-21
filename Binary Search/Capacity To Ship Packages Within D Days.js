const canShip = (capacity, weights, targetShipCount) => {
  let currWeight = 0;
  let shipCount = 1;

  for (const weight of weights) {
    if (currWeight + weight <= capacity) {
      currWeight += weight;
    } else {
      shipCount++;
      currWeight = weight;
    }
  }

  return shipCount < targetShipCount;
}

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = (weights, days) => {
  let left = Math.max(...weights);
  let right = weights.reduce((a,b) => a + b, 0);
  let res = right;

  while (left <= right) {
    const capacity = left + Math.floor(right - left / 2);

    if (canShip(capacity, weights, days)) {
      res = capacity;
      right = capacity - 1;
    } else {
      left = capacity + 1;
    }
  }

  return res;
}