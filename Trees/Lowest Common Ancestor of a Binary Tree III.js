/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
const lowestCommonAncestor = (p, q) => {
  // since for each node there is a reference to its parent
  // this problem turns into a problem of 2 linked list intersection
  // we can start from nodes p and q and go up until they meet or not

  // let's say p has to travel distance A, unique to itself and then distance
  // C which is common between p and q
  // q has to travel distance B and C
  // p => A + C, q => B + C
  // if they travel the same distance A + B + C, they will meet in their lca

  let tempP = p;
  let tempQ = q;

  while (tempP !== tempQ) {
    tempP = tempP.parent;
    tempQ = tempQ.parent;

    if (tempP === null) {
      tempP = q;
    }

    if (tempQ === null) {
      tempQ = p;
    }
  }

  return tempP;
}