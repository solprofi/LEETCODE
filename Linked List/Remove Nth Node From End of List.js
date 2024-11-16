/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
    const dummyNode = new ListNode();
    dummyNode.next = head;

    let leftPointer = dummyNode;
    let rightPointer = head;

    for (let i = 0; i < n; i++) {
        rightPointer = rightPointer.next;
    }

    while (rightPointer) {
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    leftPointer.next = leftPointer.next.next;

    return dummyNode.next;
}