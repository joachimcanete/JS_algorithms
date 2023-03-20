/**
 * STACKS are data structures taht follow 'Last-In-First-Out' (LIFO) principle
 *  - the last item inserted is the first item to be deleted
 * 
 * It is a list of elements that are accessible only from one end of the list
 *  - this is called the Top of Stack (ToS)
 * 
 * Operations include:
 * 1) PUSH
 * 2) POP
 * 3) PEEK
 * 4) LENGTH
 * 5) SEARCH
 * 6) ISEMPTY
 * 7) PRINT
 */


/**
 * class constructor is represeneted as follows
 * STACK class has 2 attributes
 * 1) data - array to story the values
 * 2) top - points to the top element of index * 
 */

// class Stack {
//   constructor() {
//     this.data = [];
//     this.top = 0;
//   };
// };


/**
 * PUSH - insert an element tot the top of Stack
 * 
 * when we push() an element to the stack,
 * we have to store it in the `top` position of `data`
 * and then inrement the `top` variable so that
 * `top` will point to the next empty place
 */

// push(ele) {
//   this.data[this.top] = ele;
//   this.top = this.top+1;
// };

/**
 * LENGTH - returns the length of the Stack
 * to get the length of the stack, we can return the `top` value
 */

// length() {
//   return this.top;
// };

/**
 * PEEK - get top element of Stack
 * to get the `peek` element of the stack,
 * we use `top - 1` attrick of `stack`
 * 
 * we use `top-1` beecause the top points to the position
 * where the new element is to be inserted,
 * therefore the top empty location
 */

// peek() {
//   return this.data[this.top-1];
// }

/**
 * ISEMPTY - checks if the Stack is empty
 * if the value of the top is equal to `0`,
 * then there is not element in the `stack`
 */

// isEmpty() {
//   return this.top === 0;
// };

/**
 * POP - deletes an element at the top of the Stack
 * when we `pop` an element from teh stack,
 * we have to remove the element in `top` position from `data`
 * and need to decrement `top` variable so that `top`
 * will poit to the previous elements position
 * 
 * also need to ensure that the stack is NOT empty
 * otherwise the value of the top will decrement below 0
 */

// pop() {
//   if (this.isEmpty() === fales) {
//     this.top = this.top-1;
//     return this.DataTransfer.pop(); //removes the last element
//   };
// };

/**
 * PRINT - print the elements of the Stack 
 */

// function print() {
//   // because top points to index where new elemt is to be inserted
//   var top = this.top-1;
//   // print up to the 0th index
//   while (top>=0) {
//     console.log(this.data[top]);
//     top--;
//   };
// };

/**
 * REVERSE - reverse the order of the Stack
 * use recurssion
 */

// function reverse() {
//   this._reverse(this.top-1);
//   function _reverse(index) {
//     if(index != 0) {
//       this._reverse(index-1);
//     };
//     console.log(this.data[index]);
//   };
// };

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  };
  
  push(ele) {
    this.data[this.top] = ele;
    this.top = this.top+1;
  };

  length() {
    return this.top;
  };

  peek() {
    return this.data[this.top-1];
  };

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    if(this.isEmpty() === false) {
      this.top = this.top-1;
      return this.data.pop();
    };
  };

  print() {
    var top = this.top-1
    while (top>=0) {
      console.log(this.data[top]);
      top--;
    };
  };

  reverse() {
    this._reverse(this.top-1);
  };
  _reverse(index) {
    if(index!=0) {
      this._reverse(index-1);
    };
    console.log(this.data[index]);
  };
};

const myStack = new Stack();

myStack.push(10);
myStack.push(9);
myStack.push(8);
myStack.push(7);
myStack.push(6);
myStack.push(5);
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.push(1);