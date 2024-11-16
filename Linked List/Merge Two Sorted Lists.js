const ListNode = (val, next) => {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    const emptyNode = new ListNode();
    let list = emptyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            list.next = list1;
            list1 = list1.next;
        } else {
            list.next = list2;
            list2 = list2.next;
        }

        list = list.next;
    }

    if (list1) {
        list.next = list1;
    } else {
        list.next = list2;
    }

    return emptyNode.next;
}