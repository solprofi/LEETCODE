const swapPairs = head => {
  const dummy = new ListNode(-1, head);
  let temp = head;
  let prevNode = dummy;

  while(temp && temp.next) {
    const firstNode = temp;
    const secondNode = temp.next;

    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    prevNode.next = secondNode;

    prevNode = firstNode;
    temp = temp.next;
  }

  return dummy.next;
}