/**
 * QUEUE is a data structure that follows 'First-In-First-Out' principle
 *  - the first item in is the first item out
 * 
 * Elements are always added to the end of the list and
 * removed from the front of the list
 * 
 * Operations include:
 * 
 * 1) ENQUEUE - add element to the queue
 * 2) DEQUEUE - remove an element from the queue
 * 3) INSERT - insert an element to the end of the queue
 * 4) DELETE - remove an element from the queue
 * 5) FRONT - get the `front` element
 * 6) REAR - get the `rear` element
 * 7) ISEMPTY -  check if the queue is empty
 * 8) PRINT - print the elements of the queue
 * 9) LENGTH - print the length of the queue
 * 10) RESET - delete all elements
 */

/**
 * class constructor is comprised of the following
 * 1) data - is the linst in which we store our elements
 * 2) rear - is used to store the position in which the next wleemnt will be stored
 * 3) size - max number of elemnt a queue can have
 */

// class Queue {
//   constructor() {
//     this.data = [];
//     this.rear = 0;
//     this.size = 10;
//   };
// };

/**
 * ENQUEUE - insert an element at the end of the queue
 * 
 * after insert and element to the queue,
 * we need to increar the `rear` value by `1` so the `rear`
 * points to the next position where the new element will be inserted
 * 
 * we also need to check if the queue is full or not so it avoids overflow
 */

// enqueue(ele) {
//   if (this.rear < this.size) {
//     this.data[this.rear] = ele;
//     this.rear = this.rear+1;
//   };
// };

/**
 * LENGTH - returns length of the queue
 * 
 * to get the length of the queue, we can use the `rear` attribute
 */

// len() {
//   return this.rear;
// };

/**
 * ISEMPTY - check if the queue is empty
 * 
 * if the `rear` points to `0`, then we can say that the queue is `empty`.
 * because `rear` points to the position where the new element will be placed,
 * if `rear` points to `0`, there is no element in the queue
 */

// isEmpty() {
//   return this.rear === 0;
// };

/**
 * FRONT - get the front element of the queue
 * 
 * in addition to getting the front element,
 * this will check if the queue is empty or not
 */

// getFront() {
//   if(this.isEmpty() === flase) {
//     return this.data[0];
//   };
// };

/**
 * REAR - get the last elemetn added to the queue
 * 
 * the `rear` value points the new position,
 * where the next element will be inseerted into the queue
 * 
 * to get the last element in the queue, we can decrease the `rear` by `1`
 */

// getLast() {
//   if(this.isEmpty() === false) {
//     return this.data[this.rear-1];
//   };
// };

/**
 * DELETE - deleting the front element from the queue
 * 
 * the element which is inserted first is the one to be deleted first
 * 
 * we can delete the front element and decrease the `rear` value by `1`
 * so the rear points to the next position to insert correctly
 */

// dequeue() {
//   if(this.isEmpty() === false) {
//     this.rear - this.rear-1;
//     return this.data.shift();
//   };
// };

/**
 * PRINT - prints elements of the queue
 * 
 * we can print elemnts of the queue from the `0` index
 * to the `rear-1` index of the queue
 */

// print() {
//   for(let i=0;i<this.rear;i++) {
//     console.log(this.data[i]);
//   };
// };

/**
 * RESET - delete all elements of the queue and set the `rear` to `0`
 */

// clear() {
//   this.data.length = 0;
//   this.rear = 0;
// };

class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  };

  enqueue(ele) {
    if(this.rear < this.size) {
      this.data[this.rear] = ele;
      this.rear = this.rear+1;
    };
  };

  len() {
    return this.rear;
  };

  isEmpty() {
    return this.rear === 0;
  };

  getFront() {
    if(this.isEmpty() === false) {
      return this.data[0];
    };
  };

  getRear() {
    if(this.isEmpty() === false) {
      return this.data[this.rear-1];
    };
  };

  dequeue() {
    if(this.isEmpty() === false) {
      this.rear = this.rear-1;
      return this.data.shift();
    };
  };

  print() {
    for(let i=0;i<this.rear;i++) {
      console.log(this.data[i]);
    };
  };

  clear() {
    this.data.length = 0;
    this.rear = 0;
  };
};

const myQ = new Queue();

myQ.enqueue(1)
myQ.enqueue(2)
myQ.enqueue(3)
myQ.enqueue(4)
myQ.enqueue(5)
myQ.enqueue(6)
myQ.enqueue(7)
myQ.enqueue(8)
myQ.enqueue(9)
myQ.enqueue(10)

myQ.isEmpty()