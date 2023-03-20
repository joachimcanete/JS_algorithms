class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  add(ele) {
    // create new node
    var node = new Node(ele);
    // place to store current node
    var curr;
    // if list is EMPTY, add element and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      curr = this.head;
      // itterates to the end of list
      while (curr.next) {
        curr = curr.next;
      };
      // add node
      curr.next = node;
    };
    this.size++ ;
  };

  // insert element at designated INDEX of list
  insertAt(ele, index) {
    if (index < 0 || index > this.size) {
      return console.log('Please enter valid index.');
    } else {
      // create new node
      var node = new Node(ele);
      var curr, prev;
      curr = this.head;
      // add element to the first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;
        // itterate over the list to find the point of insertion
        while (it < index) {
          it++;
          prev=curr;
          curr=curr.next;
        };
        // add the element
        node.next = curr;
        prev.next = node;
      };
      this.size++;
    };
  };

  // removes and returns an element from the list
  // from the specified index 
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log('Please enter valid index');
    } else {
      var curr, prev, it = 0;
      curr = this.head;
      prev = curr;
      // delete first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        //iterate over list to find point of deletion
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        };
        // remove element
        prev.next = curr.next;
      };
      this.size--;
      // return the remove element
      return curr.ele;
    };
  };

  // removes element from the list.
  // It returns the removed element, or if it’s not found it returns -1.
  removeElement(ele) {
    var curr = this.head;
    var prev = null;

    // iterate of list
    while (curr != null) {
      // compare element with current element
      // if found, remove and return true
      if (curr.ele === ele) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        };
        this.size--;
        return curr.ele;
      };
      prev = curr;
      curr = curr.next;
    };
  };

  //*---= HELPER METHODS =---*\\

  // finds index of element
  indexOf(ele) {
    var count = 0;
    var curr = this.head;

    // iterate over list
    while (curr != null) {
      // compare each element of list with given element
      if (curr.ele === ele) {
        return count;
      }
      count++;
      curr = curr.next;
    };
    // if not found
    return -1;
  };

  // isEmpty
  isEmpty() {
    return this.size == 0;
  };
  // sizeOfList
  size_of_list() {
    console.log(this.size);
  };
  // printList
  // prints the list items
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.ele + " ";
      curr = curr.next;
    };
    console.log(str);
  };
};

let ll = new LinkedList();

ll.add(10);
ll.add(9);
ll.add(8);
ll.add(7);
ll.add(6);
ll.add(5);
ll.add(4);
ll.add(3);
ll.add(2);
ll.add(1);