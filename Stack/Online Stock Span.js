class StockSpanner {
  constructor() {
    this.stack = [];
  }

  next(price) {
    let span = 1;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      const top = this.stack.pop();
      span += top[1];
    }

    this.stack.push([price, span]);

    return span;
  }
}