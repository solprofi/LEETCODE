// Design a hash set, using separate chaining
class ListNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

// Choose a base for a hashing function.
// Prime number helps with more even distribution
const ARR_SIZE = 10007;

class HashSet {
  constructor() {
    // fill the initial array with dummy nodes for easier edge-case handling
    this.set = Array.from({length: ARR_SIZE}, () => new ListNode(null));
  }

  add(key) {
    const hashedIndex = this._getHashedIndex(key);

    let curr = this.set[hashedIndex];

    while (curr.next) {
      if (curr.next.key === key) {
        return;
      }

      curr = curr.next;
    }

    curr.next = new ListNode(key);
  }

  contains(key) {
    const hashedIndex = this._getHashedIndex(key);

    let curr = this.set[hashedIndex];

    while (curr.next) {
      if (curr.next.key === key) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  }

  remove(key) {
    const hashedIndex = this._getHashedIndex(key);

    let curr = this.set[hashedIndex];

    while (curr.next) {
      if (curr.next.key === key) {
        curr.next = curr.next.next;
        return;
      }

      curr = curr.next;
    }
  }

  _getHashedIndex(key) {
    return key % ARR_SIZE;
  }

  _logSet() {
    console.log("SET:", this.set);
  }
}
