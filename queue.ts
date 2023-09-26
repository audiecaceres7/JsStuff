type NodeQ<T> = {
  value: number;
  next?: NodeQ<T>;
};

class Queue<T> {
  private head?: NodeQ<T>;
  private tail?: NodeQ<T>;
  length: number;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enque(item: number): void {
    this.length++;
    const node = { value: item } as NodeQ<T>;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): number | undefined {
    if (!this.head) {
      return undefined;
    }

    const head = this.head;
    this.head = this.head.next;

    this.length--;
    return head.value;
  }

  peek(): number | undefined {
    return this.head?.value;
  }
}

const linked_list = new Queue();

for (let i = 1; i <= 10; i++) {
  linked_list.enque(i);
}

console.log(linked_list);
linked_list.deque();
linked_list.deque();
console.log(linked_list);
