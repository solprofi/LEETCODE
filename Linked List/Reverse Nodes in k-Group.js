const reverse = head => {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
}

const findKthNode = (head, k) => {
  let curr = head;
  let count = 1;

  while (count !== k && curr) {
    count++;
    curr = curr.next;
  }

  return curr;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  let temp = head;
  let prevGroupTail = null;
  let nextGroupHead = null;

  while (temp) {
    const kthNode = findKthNode(temp, k);

    if (kthNode) {
      nextGroupHead = kthNode.next;
      kthNode.next = null;
      reverse(temp);

      if (temp === head) {
        head = kthNode;
      } else {
        prevGroupTail.next = kthNode;
      }

      prevGroupTail = temp;
      temp = nextGroupHead;
    } else {
      if (prevGroupTail) {
        prevGroupTail.next = temp;
      }

      break;
    }
  }

  return head;
}