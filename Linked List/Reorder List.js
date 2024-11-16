const reverse = head => {
    let prev = null;
    let curr = head;

    while (curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
    let slowP = head;
    let fastP = head.next;

    while (fastP && fastP.next) {
        slowP = slowP.next;
        fastP = fastP.next.next;
    }

    let secondHead = reverse(slowP.next);
    slowP.next = null;

    while (secondHead) {
        const headNext = head.next;
        const secondHeadNext = secondHead.next;

        head.next = secondHead;
        secondHead.next = headNext;

        head = headNext;
        secondHead = secondHeadNext;
    }
}