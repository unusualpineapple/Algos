// this is going to create a new node!!!

class SLL {
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
        this.head = node.remove
        return this.head
    }
    var removedathang = this.head
    this.head = removedathang.next
    removedathang.next = null
    return this.head
    } 

    valuehead() {
    if (this.head == null) {
        return null
    }
    var headval = this.head
    return headval.value
    }
}



let sll = new LinkedList()
let new_node = new SLL(10)
let another_node = new SLL(10)
let third_node = new SLL(23234)

sll = new SLL()

sll.head = new_node
new_node.next = another_node
sll.valuehead

sll.head = third_node
sll.remove = another_node
console.log(sll)
console.log(another_node)