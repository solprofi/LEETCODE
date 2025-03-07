/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob = root => {
  // we need to maximize sum of left and right subtree with
  // a condition that linked nodes can't be accounted in one sum
  // so, if adding root.val to total sum, its children values can't be added
  // and if not adding, children can be added or not to maximize the sum

  // for each node calculate maxSumWithRoot and maxSumWithoutRoot
  // maxSumWithRoot = root.val + left.withoutRoot + right.withoutRoot
  // maxSumWithoutRoot = left(max(withRoot, withoutRoot)) + right(max(withRoot, withoutRoot))

  // return [sumWithRoot, sumWithoutRoot]
  const dfs = node => {
    if (!node) {
      return [0, 0];
    }

    const leftPair = dfs(node.left);
    const rightPair = dfs(node.right);

    const sumWithRoot = node.val + leftPair[1] + rightPair[1];
    const sumWithoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

    return [sumWithRoot, sumWithoutRoot];
  }

  return Math.max(...dfs(root));
}