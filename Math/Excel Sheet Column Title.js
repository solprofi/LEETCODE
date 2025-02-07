/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = columnNumber => {
  let res = '';

  while (columnNumber) {
    const offset = (columnNumber - 1) % 26;
    res = String.fromCharCode(65 + offset) + res;

    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return res;
}