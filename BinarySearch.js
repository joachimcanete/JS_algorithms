/** BINARY SEARCH - used to search any element in a SORTED array
 * 
 *  - Much faster than Linear Time `0(N) with Time Complexity of `0(logN)`
 */

/** OPERATION
 * 
 * 1) Base Case: if starting index is greater than ending index,
 *    Return `TRUE`
 * 
 * 2) Compute middle index
 * 
 * 3) Compare middle element with number `x`. If equal, return `TRUE`.
 * 
 * 4) If greater, call same funciotn on `ending index=mid-1`.
 *     - Repeat step 1)
 * 
 * 5) If smaller, call same function  on `starting index=mid+1`.
 *     - Repeat step 1)
 */

function bSearch(arr, target) {
  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (arr[mid]=== target) return `Target located at index ${mid}`;
    if(target<arr[mid]) {
      right = mid-1;
    }else{
      left = mid+1;
    };
  };
  return "Target Not Found";
}

let inputArr = [
  1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,
  41,42,43,44,45,46,47,48,49,50,
  51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,
  71,72,73,74,75,76,77,78,79,80,
  81,82,83,84,85,86,87,88,89,90,
  91,92,93,94,95,96,97,98,99,100
];

bSearch(inputArr, 72);