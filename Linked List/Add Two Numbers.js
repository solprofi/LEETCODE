/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode();
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;

        const sum = carry + v1 + v2;

        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        const newNode = new ListNode(digit);
        curr.next = newNode;

        curr = curr.next;

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    return dummy.next;
}