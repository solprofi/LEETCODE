/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (t, s) => {
  // check if t is a subsequence of s
  // t is subsequence of s, means that any number of characters can be removed from s
  // to receive t

  // use two index pointers
  // traverse s, while checking if t[tPtr] === s[sPtr]
  // -- if equal, move both
  // -- else move only s pointer

  let tPtr = 0;

  for (let sPtr = 0; sPtr < s.length; sPtr++) {
    if (t[tPtr] === s[sPtr]) {
      tPtr++;
    }
  }

  return tPtr === t.length;
}

const searchMinMatchIndex = (indexesList, target) => {
  let left = indexesList[0];
  let right = indexesList[indexesList.length - 1];

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (indexesList[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 10^9,
// and you want to check one by one to see if t has its subsequence.
// In this scenario, how would you change your code?
const isSubsequence2 = (source, target) => {
  // build index HM for each character in target
  // set prevMatchIndex = -1
  // iterate over source chars
  // -- if char not in HM => return false
  // -- else search for index that is greater than prev match index, if found, set isMatched to true

  const targetIndexMap = {};

  for (let i = 0; i < target.length; i++) {
    if (!(target[i] in targetIndexMap)) {
      targetIndexMap[target[i]] = [i];
    } else {
      targetIndexMap[target[i]].push(i);
    }
  }

  let prevMatchedIndex = -1;

  for (const char of source) {
    if (!(char in targetIndexMap)) {
      return false;
    }

    const charIndexesList = targetIndexMap[char];

    const matchedIndex = searchMinMatchIndex(charIndexesList, prevMatchedIndex);

    if (matchedIndex === charIndexesList.length) {
      return false;
    } else {
      prevMatchedIndex = matchedIndex;
    }
  }

  return true;
}