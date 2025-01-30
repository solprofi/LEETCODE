/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let index = 0;
  let result = '';

  while(index < word1.length && index < word2.length) {
    result += word1[index] + word2[index];
    index++;
  }

  if (index < word1.length) {
    result += word1.slice(index);
  } else if (index < word2.length) {
    result += word2.slice(index);
  }

  return result;
}

// Two pointers
const mergeAlternately2 = (word1, word2) => {
  const l1 = word1.length;
  const l2 = word2.length;
  let p1 = 0;
  let p2 = 0;

  let result = '';

  while (p1 < l1 || p2 < l2) {
    if (p1 < l1) {
      result += word1[p1];
    }
    if (p2 < l2) {
      result += word2[p2];
    }

    p1++;
    p2++;
  }

  return result;
}

// One pointer
const mergeAlternately3 = (word1, word2) => {
  const l1 = word1.length;
  const l2 = word2.length;

  const len = Math.max(l1, l2);

  let result = '';

  for (let i = 0; i < len; i++) {
    if (i < l1) {
      result += word1[i];
    }
    if (i < l2) {
      result += word2[i];
    }
  }

  return result;
}
