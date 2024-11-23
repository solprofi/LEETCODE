const helper = head => {
    if (!head) {
        return 1;
    }

    const carry = helper(head.next);

    head.val += carry;
    if (head.val < 10) {
        return 0;
    }

    head.val = 0;
    return 1;
}

const addOne = head => {
    const carry = helper(head);

    if (carry === 1) {
        const newNode = new ListNode(carry);
        newNode.next = head;
        return newNode;
    }

    return head;
}