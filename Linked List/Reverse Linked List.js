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
const reverseList = (head) => {
    let prev = null;
    let curr = head;

    while (curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    head = prev;

    return head;
};


const reverseListRecursive = head => {
    if (head === null || head.next === null) {
        return head;
    }

    const reversedListHead = reverseListRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return reversedListHead;
}
