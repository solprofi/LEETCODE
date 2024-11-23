const loopLen = head => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let dist = 0;

            do {
                slow = slow.next;
                dist++;
            } while (slow !== fast);

            return dist;
        }
    }

    return 0;
}