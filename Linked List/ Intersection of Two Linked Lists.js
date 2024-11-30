/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
// BF: HS solution
const getIntersectionNode = (head1, head2) => {
  const set = new Set();

  let temp1 = head1;
  let temp2 = head2;

  while (temp1) {
    set.add(temp1);
    temp1 = temp1.next;
  }

  while (temp2) {
    if (set.has(temp2)) {
      return temp2;
    }

    temp2 = temp2.next;
  }

  return null;
}




const getListLength = head => {
  let temp = head;
  let count = 0;

  while (temp) {
    temp = temp.next;
    count++;
  }

  return count;
}

const getIntersection = (head1, head2, offset) => {
  let temp1 = head1;
  let temp2 = head2;

  while (offset) {
    temp2 = temp2.next;
    offset--;
  }

  while (temp1 !== temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return temp1;
}

//Several passes solution
const getIntersectionNode2 = (head1, head2) => {
  const len1 = getListLength(head1);
  const len2 = getListLength(head2);

  if (len1 < len2) {
    return getIntersection(head1, head2, len2 - len1);
  } else {
    return getIntersection(head2, head1, len1 - len2);
  }
}



// TC: O(m + n) SC: O(1)
const getIntersectionNode3 = (head1, head2) => {
  let temp1 = head1;
  let temp2 = head2;

  while (temp1 !== temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;

    if (temp1 === temp2) {
      return temp1;
    }

    if (temp1 === null) {
      temp1 = head2;
    }

    if (temp2 === null) {
      temp2 = head1;
    }
  }

  return temp1;
}