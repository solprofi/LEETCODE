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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(1) space with T&H algorithm
const detectCycle = head => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
}