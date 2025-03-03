/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  // create dummy node, point at head
  const dummy = new ListNode(null, head);

  // iterate until reaching leftPrev
  let leftPrev = dummy;
  for (let i = 0; i < left - 1; i++) {
    leftPrev = leftPrev.next;
  }

  // reverse list portion from left to right (iterate for right - left + 1 steps)
  let prev = null;
  let curr = leftPrev.next;
  for (let i = 0; i < right - left + 1; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // update pointers around the reversed list
  leftPrev.next.next = curr;
  leftPrev.next = prev;

  // return new head (dummy next)
  return dummy.next;
}