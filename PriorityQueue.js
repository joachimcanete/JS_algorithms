/**
 * PRIORITY QUEUES - mix binary heaps with queues and create a tupe of queue
 *                   that organizes data by importance rather than when added
 * 1) Each element of the `PQ` has a priority associated with it
 * 2) elements are added to the queue as per the priority
 * 3) Lowest priority elements are removed first
 * 
 * PQs can be built using two approaches:
 * 
 * CASE 1) add the queue element at the end of the queue and remove
 *         the elements of the queue depending on the priority
 * 
 * CASE 2) add elements to the queue according to priority and
 *         remove them from the front of the queue
 * 
 * (we'll be working on CASE 2)
 * 
 * !!!NOTE!!! `1` IS CONSIDERED THE HIGHEST PRIORITY element
 *               (for this study)
 * 
 * FUNCTIONS:
 *  - enqueue(val, prio)
 *  - dequeue()
 *  - front()
 *  - isEmpty()
 *  - print() 
 */

/**
 * DEFINITION - Define the Priority Queue class. Use a user defined class `NODE`
 *              which has 2 property elements and `priority`.
 *              Use an array in PQ class to implement the prio queue,
 *              this array is a container of `Node`
 */

// to store element and prior
// class Node {
//   constructor(val, prio) {
//     this.val = val;
//     this.prio = prio;
//   };
// };

// class PQ {
//   // array used to implement prio
//   constructor() {
//     this.arr = [];
//   };
// };

/**
 * ENQUEUE - Adds an element to the queue according to its priority
 * 
 * create a `Node` that has props of `val` and `prio` then
 * iterate over the queue to find correct location of the `Node`
 * according to its 'PRIORITY' and add it
 */

// class PQ {
//   // array used to implement prio
//   constructor() {
//     this.arr = [];
//   };

//   // to add element to queue per priority
//   enqueue(val, prio) {
//     // create object from queue element
//     var node = new Node(val, prio);
//     var contain = false;

//     // iterate through entire item array to add element at correct location of queue
//     for (let i=0;i<this.length;i++) {
//       if (this.arr[i].prio > node.prio) {
//         // once correct location is found, it is enqueued
//         this.arr.splice(i,0,node);
//         contain = true;
//         break
//       };
//     };
//     // if element has highest priority, it is added to end of queue
//     if (!contain) {
//       this.arr.push(node);
//     };
//   };
// };

/**
 * DEQUEUE - Remove element from the priority queue
 * 
 * removes an element from the FRONT of the queue because
 * the highest priority element is stored at the front of the PQ
 * 
 * use `.shift()` to remove element from queue
 */

// class PQ {
//   constructor() {
//     this.arr = [];
//   };

//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     } else {
//       return this.arr.shift();      
//     };
//   };
// };

/**
 * FRONT - returns the front element of the priority queue
 * 
 * returns front element of PQ. Simply return the 0th element of arr to get front node
 */

// class PQ {
//   constructor() {
//     this.arr = [];
//   };

//   front() {
//     if (this.isEmpty()) {
//       return "No elements in Queue";
//     } else {
//       return this.arr[0];
//     };
//   };
// };

/**
 * REAR - retunrs last element of priority queue
 * 
 * returns element in queue with lowest priority element
 */

// class PQ {
//   constructor() {
//     this.arr = [];
//   };

//   rear() {
//     if (this.isEmpty()) {
//       return "No elements in Queue";
//     } else {
//       return this.arr[this.arr.length-1];
//     };
//   };
// };

/**
 * ISEMPTY - returns true if PQ is empty
 * 
 * use length property of array to get length and
 * if it's 0, then priority queue is empty
 */

// class PQ {
//   constructor() {
//     this.arr = [];
//   };

//   isEmpty() {
//     return this.arr.length == 0;
//   };
// };

/**
 * PRINT - prints element of queue as per the priority from HIGHEST to LOWEST
 * 
 * concatenate `val` property of each PQ item into string
 */

// class PQ {
//   constructor() {
//     this.arr = [];
//   };

//   print() {
//     var str = "";
//     for (let i=0;i<this.arr.length;i++) {
//       str += this.arr[i].val + ' ';
//     };
//     return str;
//   };
// };

/**
 * FULL BUILD
 */

class Node {
  constructor(val, prio) {
    this.val = val;
    this.prio = prio;
  };
};

class PQ {
  constructor() {
    this.arr = [];
  };

  enqueue(val, prio) {
    var node = new Node(val, prio);
    var contain = false;
    
    for (let i=0;i<this.length;i++) {
      if (this.arr[i].prio > node.prio) {
        this.arr.splice(i,0,node);
        contain = true;
        break;
      };
    };
    
    if (!contain) {
      this.arr.push(node);
    };
  };

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    } else {
      return this.arr.shift();      
    };
  };

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    } else {
      return this.arr[0];
    };
  };

  rear() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    } else {
      return this.arr[this.arr.length-1];
    };
  };

  isEmpty() {
    return this.arr.length == 0;
  };

  print() {
    let str = "";
    for (let i=0;i<this.arr.length;i++) {
      str += this.arr[i].val + ' ';
    };
    return str;
  };
};

const prioQ = new PQ();

console.log(prioQ.isEmpty()); // true

console.log(prioQ.front()); // no elements in queue

console.log(prioQ.enqueue('Meridia', 2));
console.log(prioQ.enqueue('Duchess', 5));
console.log(prioQ.enqueue('Eulalia', 1));
console.log(prioQ.enqueue('Ms. Monday', 3));
console.log(prioQ.enqueue('Matilda', 4));

console.log(prioQ);

prioQ.print();

console.log(prioQ.front().val);
console.log(prioQ.rear().val);

console.log(prioQ.dequeue().val);
console.log(prioQ.front().val);
prioQ.print()

prioQ.enqueue('Loretta', 2);
console.log(prioQ.front().val);
prioQ.print()