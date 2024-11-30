const deleteKey = (head, key) => {
  let temp = head;

  while (temp) {
    if (temp.data === key) {
      if (head === temp) {
        head = head.next;
      }

      const nextNode = temp.next;
      const prevNode = temp.prev;

      if (nextNode) {
        nextNode.prev = prevNode;
      }

      if (prevNode) {
        prevNode.next = nextNode;
      }
    }

    temp = temp.next;
  }

  return head;
}