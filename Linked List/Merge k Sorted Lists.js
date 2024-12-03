/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  const pq = new MinPriorityQueue({priority: x => x.val});

  for (const head of lists) {
    if (head) {
      pq.enqueue(head);
    }
  }

  const dummy = new ListNode();
  let temp = dummy;

  while(!pq.isEmpty()) {
    const minNode = pq.dequeue().element;
    temp.next = minNode;
    temp = temp.next;

    if (minNode.next) {
      pq.enqueue(minNode.next);
    }
  }

  return dummy.next;
}