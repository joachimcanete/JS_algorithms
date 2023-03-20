let unSorted = [10, 9,8,7,6,5,4,3,2,1]
console.log(unSorted)

// call function
function mergeSort (arr) {
  // if array is single unit or empty, no need to run func
  // also acts to avoid infinte recursion
  if (arr.length <=1) {
    return arr;
  };

  // states that 'mid' is the length of 'arr' cut in half
  //used to denote how far into the arr 'slice()' should go
  const mid = Math.floor(arr.length / 2);
  // sets the first half of 'arr' to left
  const left = arr.slice(0, mid);
  // sets remainder of 'arr' to right
  const right = arr.slice(mid);

  // calls merge function demonstrated below
  // in order to combine both arrays
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};

// sort and merge the left and right arrays
function merge(left, right) {
  let resultArr = [],
      leftIndex = 0,
      rightIndex = 0;
  
  // sorts values in correct order
  // 'leftIndex' and 'rightIndex' used to keep track
  // of what has been sorted
  while (leftIndex < left.length && rightIndex < right.length) {
    // compares elements of 'leftIndex' vs 'rightIndex'
    // the lesser gets pushed to 'resultArr'
    // and cursor is moved over to prevent duplicates
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++; // moves left array cursor to next position
    } else {
      resultArr.push(right[rightIndex]);
      rightIndex++; // moves right array cursor to next position
    };
  };

  // concat operation takes place here because
  // there will be one element remaing
  // from either 'left' OR 'right'
  return resultArr
         .concat(left.slice(leftIndex)) 
         .concat(right.slice(rightIndex));
/**
 * This is very IMPORTANT!
 * If we don’t do this last step here,
 * we will have an incomplete list of elements at the end
 * because the while loop condition will fail
 * once any one of the two cursors reach the end
 * meaning the last element in either left or the right
 * isn’t inserted into the result array.
 */
}

console.log(mergeSort(unSorted))