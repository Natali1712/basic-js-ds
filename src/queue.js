const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x||null;
    this.next = null;
  }
}

class Queue {

  constructor(number){
    this.root = new ListNode(number)
  }

  getUnderlyingList() {
    return this.root
  }

  enqueue(value) {
    this.root = addToTheEnd(this.root, value)

    function addToTheEnd(node, value){
      if (!node){
        return new ListNode(value)
      }
      if(!node.value){
        node.value = value
      }else{
        node.next = addToTheEnd(node.next, value)
      }
      return node
    }
  }

  dequeue() {
    let output = this.root.value;
    this.root = this.root.next;
    return output
    
  }
}

module.exports = {
    Queue
};
