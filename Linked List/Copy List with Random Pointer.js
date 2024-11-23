/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
// O(N) space O(N) time
const copyRandomList = head => {
  if (!head) {
    return null;
  }

  let temp = head;
  const map = new Map();

  while(temp) {
    const newNode = new _Node(temp.val);
    map.set(temp, newNode);
    temp = temp.next;
  }

  temp = head;

  while(temp) {
    const copy = map.get(temp);
    copy.next = map.get(temp.next) || null;
    copy.random = map.get(temp.random) || null;
    temp = temp.next;
  }

  return map.get(head);
}