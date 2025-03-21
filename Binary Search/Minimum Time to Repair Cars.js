const canFixCarsInTime = (cars, time, ranks) => {
  let totalCars = 0;

  for (const rank of ranks) {
    totalCars += Math.floor(Math.sqrt(time / rank));
  }

  return totalCars >= cars;
}

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
const repairCars = (ranks, cars)=> {
  let left = 1;
  let right = Math.max(...ranks) ** cars;

  let result;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (canFixCarsInTime(cars, mid, ranks)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};