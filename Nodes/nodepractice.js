class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    length(){
        let runner = this.head
        if(this.head == null) {
            return 0
        }
        let count = 1
        while(runner.next){
            count++
            runner = runner.next
        }
        return count
    }
}

let sll = new LinkedList()

let node1 = new Node(4)
let node2 = new Node(5)
let node3 = new Node(3)

sll.head = node1
node1.next = node2
node2.next = node3

console.log(sll.length())
