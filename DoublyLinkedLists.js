/**
 * A "Doubly Linked List" consists of 3 elements
 * 
 * 1) Value (`val`)
 * 2) Previous Pointer || Next Pointer
 *    (to the previous or next node)
 * 3) NULL
 * 
 * The first node is called the `head`
 * and the last node is calle the `tail`
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.prev = null;
//     this.next = null;
//   };
// };

/**
 * Code representation of first node will look as follows
 * Both head and tail are pointing to the first node
 */

// const morningRitual = {
//   val: 'Drink Water',
//   prev: null,
//   next: null
// };

/**
 * PREPEND - means adding a node at the start of the linked list
 * 
 * 1) Make a new node (`Make Bed`)
 * 2) `prev` and `next` pointers will be pointing to `null`
 * 3) this.head will point to the new node
 * 4) no change to `this.tail` it will point to the current node (`Drink Water`)
 * 5) the pointer `next` for the new node will point to the node `Drink Water`
 * 6) the pointer `prev` for node `Drink Water` will point to the new node
 * 
 * Time complexity is O(1) because we only change the refernce for `this.head`
 * and the pointer `prev`  for the new node
 */

// const morningRitual = {
//   val: 'Make Bed',
//   prev: null,
//   next: {
//     val: 'Drink Water',
//     prev: `<REF TO NODE 'MAKE BED'>`,
//     next: null
//   }
// };

/**
 * APPEND - adding a node at the end of the linked list
 * 
 * 1) create new node `Brush Teeth`
 * 2) `this.tail` will point to the new node
 * 3) pointer `next` for the node `Drink Water` will point to new node `Brush Teeth`
 * 4) pointer `prev` of new node will point to previous node `Drink Water`
 * 
 * Time complexity is O(1) becaus we only change the reference for
 * `this.tial`, `prev`, and `next` for the nodes
 */

// const morningRitual = {
//   val: 'Make Bed',
//   prev: null,
//   next: {
//     val: 'Drink Water',
//     prev: `<REF TO NODE 'Make Bed'>`,
//     next: {
//       val: 'Brush Teeth',
//       prev: `<REF TO NODE 'Drink Water'>`,
//       next: null
//     }
//   }
// };

/**
 * INSERT - insert node at a given index
 * (add new node 'Drink Lemon Water' after node 'Drink Water')
 * `insert('Drink Lemon Water', 2);`
 * 
 * 1) creat new node `Drink Lemon Water`
 * 2) traverse to index `2` and keep reference for
 *    node `Drink Water` and `Brush Teeth`
 * 3) point `next` of `Drink Water` to new node
 * 4) point `prev` of new node back to node `Drink Water`
 * 5) point `next` of new node to node `Brush Teeth`
 * 6) point prev of node `Brush Teeth` to new node
 * 
 * Worst case time complexity is O(n) where `n` is "number of nodes"
 * in doubly linked list or length of "doubly" linked list
 * becuase we might have to traverse to the end of the doubly linekd list
 */

// const morningRitual = {
//   val: 'Make Bed',
//   prev: null,
//   null: {
//     val: 'Drink Water',
//     prev: `<REF TO NODE 'Make Bed'>`,
//     null: {
//       val: 'Drink Lemon Water',
//       prve: `<REF TO NODE 'Drink Water'>`,
//       next: {
//         val: 'Brush Teeth',
//         prev: `<REF TO NODE 'Drink Lemon Water'>`,
//         next: null
//       }
//     }
//   }
// };

/**
 * `insert` can be optimized by checking the index
 * if the index is `0`, call `prepend`
 * when index is === to length of DLL, call `append`
*/

/**
 * REMOVE - delete a node at a givn index
 * (delete node `Drink Water`)
 * `delete('Drink Water;, 1);
 * 
 * 1) traverse to node that is before node marked for delete (`prevNode`)
 * 2) identify node after the node marked for delete (`nextNode`)
 * 3) point the `next` point of node `prevNode` to `nextNode` node
 * 4) point the `prev` pointer of node `prevNode` to the `prevNode`
 * 
 * Time complexity is O(n) because
 * we need to traverse DLL to find node to be delete
 */

// const morningRitual = {
//   val: 'Make Bed',
//   prev: null,
//   next: {
//     val: 'Drink Lemon Water',
//     prev: `<REF TO NODE 'Make Bed'>`,
//     next: {
//       val: 'Brush Teeth',
//       prev: `<REF TO NODE 'Drink Lemon Water'>`,
//       next: null
//     }
//   }
// };

/**
 * `remove` can be optimized where, in the case of index being `0`,
 * we can point `this.head` to the next node
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  };
};

class DoublyLinkedList {
  constructor(val) {
    this.head = {
      val: val,
      next: null,
      prev: null,      
    };
    this.length = 1;
    this.tail = this.head;
  };

  printList() {
    let arr = [];
    let currList = this.head;
    while (currList !== null)  {
      arr.push(currList.val);
      currList = currList.next;
    };
    console.log(arr.join(' <--> '));
    return this;
  };

  // insert node at end of list
  append(val) {
    let newNode = new Node(val);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  };

  // insert node at start of list
  prepend(val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    this.printList();
  };

  // insert node at given index
  insert(index, val) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    };

    // index is 0, prenend()
    if (index === 0) {
      this.prepend(val);
      return this;
    };

    // if index is equal to this.length, append()
    if (index === this.length) {
      this.append(val);
      return this;
    };

    // reach the node at the index
    let newNode = new Node(val);
    let prev = this.head;

    for (let i=0; i<index-1;i++) {
      prev = prev.next;
    };

    let nextNode = prev.next;

    newNode.next = nextNode;
    prev.next = newNode;
    newNode.prev = prev;
    nextNode.prev = newNode;

    this.length++;
    this.printList();
  };

  // remove nod at given index
  remove(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    };

    // remove head
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      this.length--;
      this.printList();
      return this;
    };

    // remove tail
    if (index === this.length-1) {
      this.tail = this.tail.prev;
      this.tail.next = null;

      this.length--;
      this.printList();
      return this;
    }

    // remove node at given index
    let prev = this.head;
    
    for (let i=0;i<index-1;i++) {
      prev = prev.next;
    };

    let deleteNode = prev.next;
    let next = deleteNode;

    prev.next = next;
    next.prev = prev;

    this.length__;
    this.printList();
    return this;
  };
};