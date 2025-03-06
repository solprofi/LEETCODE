/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const deleteNodes = (head, m, n) => {
  // to delete nodes just relink lastMNode to 1st node after n nodes
  // traverse the list
  // go over m node, keep the last one
  // go over n nodes
  // relink last M node to nth.next node

  let curr = head;

  while (curr) {
    let mCount = m;
    let lastMNode;

    while (curr && mCount) {
      lastMNode = curr;
      curr = curr.next;
      mCount--;
    }

    let nCount = n;
    while (curr && nCount) {
      curr = curr.next;
      nCount--;
    }

    lastMNode.next = curr;
  }

  return head;
}