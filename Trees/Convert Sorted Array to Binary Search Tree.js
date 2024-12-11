/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
  const createTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);

    return root;
  }

  return createTree(0, nums.length - 1);
}