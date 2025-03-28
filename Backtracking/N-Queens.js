const transformBoard = board => board.map(arr => arr.join(''));
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = n => {
  // place N queens on n x n board, so they don't attack each other

  // placement is valid if there are:
  // -- no Q in col
  // -- no Q in row
  // -- no Q in diag
  // -- no Q in anti-diag

  // use backtrack(rowIndex, col, diag, antiDiag, board)
  // col, diag and antiDiag are sets that keep track of placements in each
  // diag index: row - col
  // antiDiag index: row + col

  // BC: rowIndex === n => we've safely placed all Q, add valid solution to result

  const result = [];

  const board = Array.from({length: n}, () => Array.from({length: n}, () => '.'));

  const backtrack = (rowIndex, col, diag, antiDiag, boardState) => {
    if (rowIndex === n) {
      result.push(transformBoard(boardState));
      return;
    }

    for (let colIndex = 0; colIndex < n; colIndex++) {
      const diagIndex = rowIndex - colIndex;
      const antiDiagIndex = rowIndex + colIndex;

      if (!col.has(colIndex) && !diag.has(diagIndex) && !antiDiag.has(antiDiagIndex)) {
        col.add(colIndex);
        diag.add(diagIndex);
        antiDiag.add(antiDiagIndex);
        boardState[rowIndex][colIndex] = 'Q';

        backtrack(rowIndex + 1, col, diag, antiDiag, boardState);

        col.remove(colIndex);
        diag.remove(diagIndex);
        antiDiag.remove(antiDiagIndex);
        boardState[rowIndex][colIndex] = '.';
      }
    }
  }

  backtrack(0, new Set(), new Set(), new Set(), board);

  return result;
};