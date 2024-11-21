/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(N) space with hash set
const detectCycle = head => {
    const set = new Set();

    while (head) {
        if (set.has(head)) {
            return head;
        }

        set.add(head);
        head = head.next;
    }

    return null;
}