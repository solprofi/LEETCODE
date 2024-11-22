/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(N) Space
const isPalindrome = head => {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

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

// O(1) space
const isPalindrome2 = head => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let left = head;
    let right = reverse(slow);

    while (right) {
        if (left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
}