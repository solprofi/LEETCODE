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
  if (!head) {
    return null;
  }

  let left = head;
  let right = head.next;

  while(right && right.next) {
    while (right && left.val === right.val) {
      right = right.next;
    }

    left.next = right;
    left = left.next;
  }

  return head;
}

const deleteDuplicates2 = head => {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}