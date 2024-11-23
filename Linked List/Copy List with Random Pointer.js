/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
// O(N) space O(N) time
const copyRandomList = head => {
  if (!head) {
    return null;
  }

  let temp = head;
  const map = new Map();

  while(temp) {
    const newNode = new _Node(temp.val);
    map.set(temp, newNode);
    temp = temp.next;
  }

  temp = head;

  while(temp) {
    const copy = map.get(temp);
    copy.next = map.get(temp.next) || null;
    copy.random = map.get(temp.random) || null;
    temp = temp.next;
  }

  return map.get(head);
}

// O(1) space O(N) time
const copyRandomList2 = head => {
  let temp = head;

  while(temp) {
    const newNode = new _Node(temp.val, temp.next);
    temp.next = newNode;
    temp = temp.next.next;
  }

  temp = head;
  while(temp) {
    temp.next.random = temp.random ? temp.random.next : null;
    temp = temp.next.next;
  }

  const dummy = new _Node();
  let res = dummy;
  temp = head;

  while(temp) {
    res.next = temp.next;
    temp.next = temp.next.next;
    res = res.next;
    temp = temp.next;
  }

  return dummy.next;
}