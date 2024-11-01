class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);

        if (this.minStack.length) {
            const newMin = Math.min(value, this.minStack[this.minStack.length - 1]);
            this.minStack.push(newMin);
        } else {
            this.minStack.push(value);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}