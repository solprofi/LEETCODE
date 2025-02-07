/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicatesUnsorted = head => {
  const countMap = {};
  let temp = head;

  while(temp) {
    countMap[temp.val] = (countMap[temp.val] || 0) + 1;
    temp = temp.next;
  }

  const dummy = new ListNode(null, head);
  temp = dummy;

  while (temp && temp.next) {
    if (countMap[temp.next.val] > 1) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummy.next;
};