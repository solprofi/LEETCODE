const reverse = head => {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let curr = head;

  while (curr) {
    prev = curr.prev;
    curr.prev = curr.next;
    curr.next = prev;

    curr = curr.prev;
  }

  return prev.prev;
}