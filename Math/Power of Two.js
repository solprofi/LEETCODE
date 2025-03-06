/**
 * @param {number} n
 * @return {boolean}
 */
// check in logN time
// keep dividing n while mod is not 1
// for powers of 2 n will have to be 1 in the end
const isPowerOfTwo = n => {
  if (n === 0) {
    return false;
  }

  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }

  return n === 1;
}

// use bitwise operator &
// x and -x in binary have only the rightmost 1 in common
// so doing bitwise & will leave only one 1
// since power of two binary representation contains only 1 one
// we can check for x & -x to equal x itself
const isPowerOfTwo2 = n => {
  if (n === 0) {
    return false;
  }

  return (n & -n) === n;
}

// if n is a power of 2, n - 1 will not have any matching 1's
// so n & n - 1 will be 0
const isPowerOfTwo3 = n => {
  if (n === 0) {
    return false;
  }

  return (n & n - 1) === 0;
}