var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    DoublyLinkedList.prototype.print = function () {
        var curr = this.head;
        for (var i = 0; curr && i < this.length; i++) {
            console.log(curr.value);
            curr = curr.next;
        }
    };
    DoublyLinkedList.prototype.prepend = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    };
    DoublyLinkedList.prototype.insertAt = function () { };
    DoublyLinkedList.prototype.append = function (item) {
        this.length++;
        var node = { value: item };
        if (!this.tail) {
            this.head = this.tail = node;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    };
    DoublyLinkedList.prototype.remove = function (item) {
        var curr = this.head;
        for (var i = 0; curr && this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
    };
    DoublyLinkedList.prototype.get = function (idx) {
        var _a;
        return (_a = this.getAt(idx)) === null || _a === void 0 ? void 0 : _a.value;
    };
    DoublyLinkedList.prototype.removeAt = function (idx) {
        var node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    };
    DoublyLinkedList.prototype.removeNode = function (node) {
        var _a;
        this.length--;
        if (this.length === 0) {
            var out = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
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
    };
    DoublyLinkedList.prototype.getAt = function (idx) {
        var curr = this.head;
        for (var i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    };
    return DoublyLinkedList;
}());
var people = [
    { id: 0, name: "Harry", age: 22 },
    { id: 1, name: "Ron", age: 22 },
    { id: 2, name: "Hermione", age: 22 },
    { id: 3, name: "Hagrid", age: 1 },
    { id: 4, name: "Tom", age: 1000 },
];
var linkedList = new DoublyLinkedList();
for (var i = 0; i < people.length; i++) {
    linkedList.append(people[i]);
}
people.map(function (person) {
    if (person.name === "Tom") {
        linkedList.remove(person);
    }
});
linkedList.print();
