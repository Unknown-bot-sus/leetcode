class MinStack<T> {
  private stack: Array<T>;
  private min_stack: Array<T>;

  constructor() {
    this.stack = [];
    this.min_stack = [];
  }

  push(val: T): void {
    this.stack.push(val);
    const min = this.getTop(this.min_stack);
    this.min_stack.push(val < min || min === undefined ? val : min);
  }

  pop(): void {
    this.stack.pop();
    this.min_stack.pop();
  }

  top(): T {
    return this.getTop(this.stack);
  }

  getMin(): T {
    return this.getTop(this.min_stack);
  }

  getTop(arr: Array<T>): T {
    return arr[arr.length - 1];
  }
}

const stack = new MinStack<number>();

stack.push(3);
