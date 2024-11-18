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
const swapNodes = (head, k) => {
    let first = head;

    for (let i = 1; i < k; i++) {
        first = first.next;
    }

    let left = head;
    let right = first;

    while (right.next) {
        left = left.next;
        right = right.next;
    }

    [first.val, left.val] = [left.val, first.val];

    return head;
}