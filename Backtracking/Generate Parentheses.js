/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    // Backtracking blueprint
    // CHOICE: either open or closed parenthesis can be added to string
    // CONSTRAINTS: open can be added when open < n, closed can be added when closed < open
    // GOAL: string length is 2 * n (n opened and n closes parentheses)

    const res = [];

    const backtrack = (open, closed, path) => {
        if (path.length === 2 * n) {
            res.push(path);
            return;
        }

        if (open < n) {
            backtrack(open + 1, closed, path + '(');
        }

        if (closed < open) {
            backtrack(open, closed + 1, path + ')' );
        }
    }

    backtrack(0, 0, '');

    return res;
}