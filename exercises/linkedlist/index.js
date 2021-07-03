// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        return this.head = new Node(data, this.head);
    }
    size(){
        let counter=0,node=this.head;
        while(node){
            counter++;
            node=node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
          return null;
        }
        let node = this.head;
       while(node){
         if(!node.next){
           return node;
         }
         node = node.next;
       }
    }
    
    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        
    }

    removeLast(){
        if(!this.head){
            return;
        }
        
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
      while(node.next){
        previous = node;
        node = node.next;
      }previous.next = null;
    }

    insertLast(data){
        let last = this.getLast();
        if(last){
            last.next = new Node(data);
        }else{
            this.head = new Node(data)
        }
    }

    getAt(index){
        if(!this.head){
            return null;
        }
        let node = this.head;
        let counter = 0;
        while(node){
            if(counter == index){
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index){
        
        if(!this.head){
            return null;
        }
        if(index == 0){
            this.head = this.head.next;
        }
        let previous = this.getAt(index-1);
        if(!previous) return null;

        if(previous && previous.next == null){
            return null;
        }
        if(previous && previous.next !=null && previous.next.next == null){
            previous.next = null;
            return null; 
        }
        previous.next = previous.next.next;
    }

    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index == 0 && this.head){
            this.head = new Node(data, this.head);
            return;
        }
        let previous = this.getAt(index-1) || this.getLast();
        let node = new Node(data, previous.next);
        previous.next  = node;
    }

}

module.exports = { Node, LinkedList };
