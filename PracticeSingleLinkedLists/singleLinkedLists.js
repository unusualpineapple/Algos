class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    addNonDup(val){
        let runner = this.head
        
        while(runner.data !== val){
            runner = runner.next
            if (runner == null){
                runner.next = new Node(val)
                return the_list
            }
            else{
                runner
            }
            break
        }
        return console.log('addNonDup function failed')
    }

}


let the_list = new LinkedList();
let node1 = new Node(9);
let node2 = new Node(5);
the_list.head = node1;
node1.next = node2;

console.log(the_list.addNonDup(20))