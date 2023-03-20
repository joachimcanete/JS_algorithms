/** SELECTION SORT - an in-place, unstable, comparisn algorithm
 * 
 *  - Transforms the input collection using no auxilary data structures
 *    and the input is overridden by the output (in-place algorithm)
 * 
 *    During exectution, it only reads list elements through
 *    a single abstract comparison operation, usually `<=` operator
 */

/** OPERATION
 * 
 *  - Divides the input array into 2 sublists
 *    1) `sorted`
 *       Located at the start of the collection
 *    2) `unsorted`
 *       All elements to the right of the final sorted element
 *       are considered `unsorted`
 * 
 *  - To start, the `sorted` list is empty, while
 *    the rest of the colleciton is `unsorted`.
 *    `SelectionSort` goes through unsorted sublist and
 *    finds the smallest or largest element. The element is then swapped
 *    for the leftmost elemnt of the `unsorted` sublist.
 *    The `sorted` sublist is expanded to inlcude that element
 * 
 *  - This operaiton is repeated, finding the fitting element, swapping it
 *    with the leftmost element of the `unosrted` list,
 *    and expandig the `sorted` list to encompass it
 * 
 *  - After each iteration, one less element needs to be checked
 *    until the entire array/list is sorted.
 * 
 *    In other words, after the `k-th` iteration, the first `k` eleemnts
 *    of the array or list are guaranteed to be sorted
 */

/** IMPLEMENTATION
 * 
 *  - Iterate through the entire input array, and for each element of array,
 *    find the smallest number in the `sorted` array.
 * 
 *    If the smallest numer isn't the first item in the `unsorted` array,
 *    swap it with the first element of the `unsorted` subarry
 */

/** TIME COMPLEXITY
 * 
 *  - In the first iteration, throughout the array of `n` elements,
 *    the functions makes `n-1` comparisons and potentially one swap.
 *    In the second iteration, the function makes `n-2` comparisons, etc.
 * 
 *    The total number of comparisons will be `(n-2) + (n-1) + ... + 1`,
 *    which adds up to `n(n-1)/2 = ((n^2)-n)/2`.
 * 
 *  - The resulting run-time is `O(n^2)`
 *    It's a pretty bad time complexity for a sorting algorithm.
 *    Most other collections will be sorted with `QuickSort` or `MergeSort`
 * 
 *  - Best-case performance of `SelectioSort` is also `O(n^2)`,
 *    so checking whether the array or list is sorted or not
 *    is also really inefficient
 * 
 *    Still better than `BubbleSort` with its *quadratic time complexity*
 * 
 *  - `SelectionSort` is a funamental and simple algorithm, thus inefficient.
 *    However, it is the foundation of some very widely-used algorithms.
 *    
 *    A variant of `SelectionSort` is `HeapSort`, which internally uses
 *    a `heap` data structure for storing elements.
 *    Using heaps can speed up the find and removal of elements
 *    to `O(logn)` time
 */

function selectSort(arr) {
  let n = arr.length;

  for (let i=0;i<n;i++) {
    // finding the smallest number in subarray
    let min = i;
    for (let j=i+1;j<n;j++) {
      if (arr[j] < arr[min]) {
        min = j;
      };
    };
    if (min !=i) {
      // swapping the elements
           let temp = arr[i];
        arr[i] = arr[min];
      arr[min] = temp;
    };
  };
  return arr;
};

let inputArr = [5, 2, 4, 6, 1, 3];
console.log(inputArr);
selectSort(inputArr);
console.log(inputArr);