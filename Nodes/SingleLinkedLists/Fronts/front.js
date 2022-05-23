// this is going to create a new node!!!

class Node {
    // constructor, other methods, removed for brevity
    constructor(data) {
        this.data=data;
        this.next=null;
        }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let new_node = new Node(value);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
}

    removeFront() {
    if (this.head == null) {
        // this.head = node.remove
        return this.head
    }
    var removedathang = this.head
    this.head = removedathang.next
    removedathang.next = null
    return removedathang
    } 

    valuehead() {
    if (this.head == null) {
        return null
    }
    var headval = this.head
    return headval.data
    }
}



let sll = new LinkedList()
// let new_node = new Node(10)
// let another_node = new Node(25)
// let third_node = new Node(23234)

// sll = new Node()

// sll.head = new_node
// new_node.next = another_node
// sll.valuehead
// console.log(sll)

sll.addFront(14)
sll.addFront(23234)
console.log(sll)
console.log(sll.removeFront())
console.log(sll)
console.log(sll.valuehead())
// console.log(another_node)