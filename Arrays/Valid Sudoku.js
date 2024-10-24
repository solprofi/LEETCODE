/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const squares = Array.from({length: 9}, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = board[row][col];
            if (cell === ".") {
                continue;
            }

            const squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (rows[row].has(cell) || cols[col].has(cell) || squares[squareIndex].has(cell)) {
                return false;
            }

            rows[row].add(cell);
            cols[col].add(cell);
            squares[squareIndex].add(cell);
        }
    }

    return true;
};