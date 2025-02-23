/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (input, limit) => {
  // pair the heaviest person with the lightest one
  // for maximum greedy distribution
  // sort input for 2 pointers to work

  const people = input.sort((a,b) => a - b);

  let left = 0;
  let right = people.length - 1;

  let boatsCount = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--
    } else {
      right--;
    }

    boatsCount++;
  }

  return boatsCount;
}