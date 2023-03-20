/**
 * HEAPS - structure data into a more intelligent queue that's
 *         sorted by importance rather than order of appearance/approach
 * 
 * Unlike 'binary search trees' (BSTs), with 'binary heaps' (BH) we only work between
 * parents and their children
 * 
 * Like BSTs, BHs are only allowed to have 2 or fewer children to a parent
 * They are always balanced because every new node will be added
 * to a level from left to right until full
 * 
 * This resultes in 2 possibilities for heaps
 * 1) `max heap` - moving highest to lowest
 * 2) `min heap` - moving lowest to highest
 */

/**
 * It's goig to be better to handle BHs as arrays.
 * the order is left to right on a level before moving a level deeper
 * 
 * We can create a consistant patter for finding a node's children
 *  - All the nodes left children will be exactly at `2n + 1` away from parent
 *  - Al the nodes right children will be exactly at `2n + 2` away from parent
 *    (where `n` = parent's index)
 */


/**
 * ADD - adding a new node is not so simple as `push()` to array
 *       the tricky part is that we ned t compare it with the parents
 *       inbetween itself and the max, then reorder accordingly
 * 
 * 1) after pushing new element into the end of array, 'bubble up' larger values
 * 2) grab the new item at the end of array, break into index and the new item at index
 * 3) use reverse of equation to find children, `(n-1)/2`, to find parent
 * 4) if parent is less than current node, swap and save index
 *    which will be the next `curr`
 * 5) continue until no parents are left
 * 6) since we'll be gradually moving `index` up from end,
 *    as long as it's greater than 0, keep swapping
 */

// class BH {
//   constructor() {
//     this.val = [];
//   };

//   add(ele) {
//     // push to end of arr
//     this.val.push(ele);
//     // states new element's index and storing it in `curr`
//     let index = this.val.len-1;
//     const curr = this.val[index];

//     while (index > 0) {
//       // pIndex = parent index
//       // p = parent
//       // because of how consistent BHs are,
//       // we'll always know the index of the parent
//       // will be current's index run through the above calculation,
//       // but in reverse (see lines 22, 23, & 35 for more info)
//       let pIndex = Math.floor((index-1)/2);
//       let p = this.val[pIndex];

//       // if parent index is less than current index
//       if (p <= curr) {
//         // current parent index become grandarent index
//         this.val[pIndex] = curr;
//         // current index become parent index
//         this.val[index] = p;
//         // curent value becomes parent value
//         index = pIndex;
//       } else break;
//     };
//   };
// };

/**
 * REMOVE MAX - removing topmost node is very complicated.
 *              we're going to return first node, max node,
 *              last node, end of arr, and set that as the new max
 * 
 * This is important so we can use lowest value as an easy baseline to compare
 * other values as we 'sinkn down' bakc to the bottomw of the tree while
 * making comparisons and swaps along the way
 * 
 * 1) grave current max value and popp it off bfore replacing it with last item
 *  - can be returned once everything else is done
 * 2) grab goth right and left children
 *  - if left child is vald and is greater, `swap` to run the swap
 *  - when all the swaps are done
 * 3) right child is more complicated. Only want *ONE* largest child to be swapped
 *  - add seperate requirement that `rightChild` can only be set as swap
 *  - if it hasn't been defined yet or is larger than `leftChild`
 */

// class BH {
//   constructor() {
//     this.val = [];
//   };

//   add(ele) {
//     // push to end of arr
//     this.val.push(ele);
//     // states new element's index and storing it in `curr`
//     let index = this.val.len-1;
//     const curr = this.val[index];

//     while (index > 0) {
//       // pIndex = parent index
//       // p = parent
//       // because of how consistent BHs are,
//       // we'll always know the index of the parent
//       // will be current's index run through the above calculation,
//       // but in reverse (see lines 22, 23, & 35 for more info)
//       let pIndex = Math.floor((index-1)/2);
//       let p = this.val[pIndex];

//       // if parent index is less than current index
//       if (p <= curr) {
//         // current parent index become grandarent index
//         this.val[pIndex] = curr;
//         // current index become parent index
//         this.val[index] = p;
//         // curent value becomes parent value
//         index = pIndex;
//       } else break;
//     };
//   };

//   extractMax() {
//     const max = this.val[0];
//     const end = this.val.pop();
//     this.val[0] = end;

//     let index = 0;
//     const len = this.val.length
//     const curr =this.val[0];

//     while(true) {
//       // left child index = `lCI`, left child = `lChild`
//       // right child index = `rCI`, right child = `rChild`
//       let lCI = 2*index+1;
//       let rCI = 2*index+1;
//       let lChild, rChild;
//       let swap = null;

//       if (lCI < len) {
//         lChild = this.val[lCI];
//         if (lChild > curr) swap = lCI;
//       };
//       if (rCI < len) {
//         rChild = this.val[rCI];
//         if(
//           (swap === null && rChild > curr) ||
//           (swap !== null && rChild > lChild)
//         )
//         swap = rCI
//       };
//       if (swap === null) break;
//       this.val[index] = this.val[swap];
//       this.val[swap] = curr;
//       index = swap;
//     };
//     return max;
//   };
// };