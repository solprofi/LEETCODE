class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.size = capacity;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this.deleteNode(node);
    this.insertAfterHead(node);

    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      this.deleteNode(node);
      this.insertAfterHead(node);
    } else {
      if (this.map.size === this.size) {
        const node = this.tail.prev;
        this.deleteNode(node);
        this.map.delete(node.key);
      }

      const newNode = new Node(key, value);
      this.insertAfterHead(newNode);
      this.map.set(key, newNode);
    }
  }

  deleteNode(node) {
    const nextNode = node.next;
    const prevNode = node.prev;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  insertAfterHead(node) {
    const headNext = this.head.next;

    node.next = headNext;
    node.prev = this.head;
    this.head.next = node;
    headNext.prev = node;
  }
}