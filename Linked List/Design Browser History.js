class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.current = new Node(homepage);
  }

  visit(url) {
    const node = new Node(url);

    this.current.next = node;
    node.prev = this.current;
    this.current = this.current.next;
  }

  back(steps) {
    while (steps && this.current.prev) {
      this.current = this.current.prev;
      steps--;
    }

    return this.current.data;
  }

  forward(steps) {
    while(steps && this.current.next) {
      this.current = this.current.next;
      steps--;
    }

    return this.current.data;
  }
}