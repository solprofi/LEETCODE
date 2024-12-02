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

const swapRecursive = head => {
  if (!head || !head.next) {
    return head;
  }

  const firstNode = head;
  const secondNode = head.next;

  firstNode.next = swapRecursive(secondNode.next);
  secondNode.next = firstNode;

  return secondNode;
}