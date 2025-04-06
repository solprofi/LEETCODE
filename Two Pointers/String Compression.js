/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
  let writePtr = 0;

  for (let i = 0; i < chars.length; i++) {
    let charCount = 1;

    while (chars[i] === chars[i + 1]) {
      i++;
      charCount++;
    }

    const encodedGroup = charCount === 1 ? chars[i] : chars[i] + charCount;

    for (let j = 0; j < encodedGroup.length; j++) {
      chars[writePtr] = encodedGroup[j];
      writePtr++;
    }
  }

  return writePtr;
};