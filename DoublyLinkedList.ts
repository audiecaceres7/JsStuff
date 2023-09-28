type NodeD<T> = {
  value: T;
  prev?: NodeD<T>;
  next?: NodeD<T>;
};

class DoublyLinkedList<T> {
  private head?: NodeD<T>;
  private tail?: NodeD<T>;
  length: number;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  print(): void {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  prepend(item: T): void {
    const node = { value: item } as NodeD<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(): void {}

  append(item: T): void {
    this.length++;
    const node = { value: item } as NodeD<T>;
    if (!this.tail) {
      this.head = this.tail = node;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  private removeNode(node: NodeD<T>): T | undefined {
    this.length--;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;
    return node.value;
  }

  private getAt(idx: number): NodeD<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  }
}

const people = [
  { id: 0, name: "Harry", age: 22 },
  { id: 1, name: "Ron", age: 22 },
  { id: 2, name: "Hermione", age: 22 },
  { id: 3, name: "Hagrid", age: 1 },
  { id: 4, name: "Tom", age: 1000 },
];

const linkedList = new DoublyLinkedList();
for (let i = 0; i < people.length; i++) {
  linkedList.append(people[i]);
}

people.map((person) => {
  if (person.name === "Tom") {
    linkedList.remove(person);
  }
});
linkedList.print();
