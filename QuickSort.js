/** EX. Destructuring Assignment
 * let a = 3
 * let b = 10
 * [a,b] = [b,a]
 * console.log(a,b) // a=10, b=3
 */

let unSorted = [1,43,6,4,1,2,7,8,0,45,3,92,53,99,81,51,29,37,44,75,40,98,9,5]
console.log(unSorted)

/**
 * To implement quick sort using the recursive approach,
 * you need to first create a 'partitioning() function'
 * that accepts the array (arr) you wish to sort,
 * the 'startIndex', and the 'endIndex' of the array.
 * The function will start by grabbing the pivot element
 * and compare the array elements with itself
 */
function partition(arr, startIndex, endIndex) {
  const pivotVal = arr[endIndex]; // pivot element

  // keep track of array index which takes value from 'startIndex'
  // for each swap, index will move until it reaches MIDDLE
  let index = startIndex

  // iterate through array and swap
  for (let i=index;i<endIndex;i++) {
    // uses 'destructuring assignment'(see above) to swap element values
    if (arr[i] < pivotVal) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index += 1;
    };
  };

  // move 'pivotVal' to middle index and return new middle index
  [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
  return index;
};

/**
 * With the 'partition()' function done,
 * now you need to create the 'quickSort()' function.
 * This function will simply call the 'partition()' function,
 * passing along the startIndex and endIndex 
 */

function quickie(arr, startIndex, endIndex) {
  // base-case or terminate-case
  if (startIndex >= endIndex) {
    return;
  };

  // retruns midIndex / pivot index
  let midIndex = partition(arr, startIndex, endIndex);

  // recursively apply same logic to left and right sub arrays
  quickie(arr, startIndex, midIndex-1);
  quickie(arr, midIndex+1, endIndex);
}

/**
 * To test the Quick Sort funciton,
 * send array AND 'startIndex' & 'endIndex'
 * which starts from '0' and 'array.length - 1'
 */

 quickie(unSorted, 0, unSorted.length - 1);
 console.log(unSorted);