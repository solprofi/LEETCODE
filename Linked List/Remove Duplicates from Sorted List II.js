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
const deleteDuplicates = head => {
  const dummy = new ListNode(null, head);

  let curr = dummy;

  while (curr && curr.next) {
    if (curr.next.val === curr.next.next?.val) {
      let temp = curr.next;
      const val = temp.val;
      while (temp?.val === val) {
        temp = temp.next;
      }

      curr.next = temp;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};