type NodeS<T> = {
  value: T;
  prev?: NodeS<T>;
};

class Stack<T> {
  public length: number;
  private head?: NodeS<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    const node = { value: item } as NodeS<T>;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head as NodeS<T>;
      this.head = undefined;
      return head.value;
    }

    const head = this.head as NodeS<T>;
    this.head = head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack = new Stack();

for (let i = 1; i <= 10; i++) {
  stack.push(i);
}

console.log(stack);

stack.pop();

console.log(stack);
