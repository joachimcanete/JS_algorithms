/** COUNTING SORT - stable, non-comparison sorting algorithm
 * 
 *  - Runs on `O(n+K)` *linear* time complexity, where
 *    `n` is the size of the input list and
 *    `k` is the value of the max element in the input array.
 * 
 *    When `k=O(n)`, then counting sort runs in `O(n)` time complexity.
 * 
 *  - Typically, sorting algorithms are bound at being able to
 *    run faster than `(Onlogn)`, but because `Counting Sort`
 *    doesn't run on the comparison model, the bound doesn't apply
 */

/** OPERATION
 * 
 *  - Start by initializing an auxiliary array of `length k`,
 *    which will hold the count of each number.
 * 
 *    Each index has an initial value of `0`.
 *
 *  - Loop through the input array and increment for each value by `1`
 *    every time a number is encountered in the array
 *    The auxiliary array should now hold the number of times
 *    each eleemnt is in the input array
 * 
 *  - Loop from the minimum value to maximum value.
 *    Loop through each corresponding value in the count array and
 *    add elements who's count is greater than `0` to the array
 *    IN SEQUENTIAL ORDER.
 * 
 *    Each item is added by using a secondary incrementing variable,
 *    then increasing that second incrementing variable so
 *    the next item is place in the next highest array index
 * 
 *  - Finally, decrease the value of the current item in the count array
 *    so that there aren't too many elements added of that value
 */

/** IMPLEMENTATION
 * 
 *  - Initialize variables
 *      i) `i` = first incrementing vairable
 *      ii) `j` = second incrementing vairable
 *      iii) `len` = length of input array
 *      iv) `count` = empty array that will use to store # of times
 *                    each element in the input array appears
 * 
 *  - First, loop from `i` (min val) to `max val`,
 *    setting each item's count to `0`.
 * 
 *  - Second, loop through input array and increment
 *    value of ech item in the `count` array
 * 
 * EX. If `arr = [14, 28, 12, 14];`, then on the first pass,
 *     we'd increment `count[14]` to `1`, then `count[28]` to `1`,
 *     count[12] to`1`, then `count[14]` to `2`.
 * 
 *  - Third, loop from the `min val` to `max val`. Inside this loop,
 *    use `while` loop to check the value of current item in `count` array,
 *    add it to the `j-th` position in the input array if `count > 0`,
 *    increase `j` by `1` so the next item gets added to `j-th` + 1 position,
 *    decremenet `count of current item.
 * 
 *    the `j` variable will just be looping through length of array
 *    and adding in items of `count` array who's value is greater than `0`
 */

function countSort(arr,min,max) {
  // initialize variables
  let i=min,
  j=0,
  len = arr.length,
  count = [];

  for (i;i<=max;i++) {
    count[i] = 0;
  };
  for (i=0;i<len;i++) {
    count[arr[i]] += 1;
  };
  for (i=min;i<=max;i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    };
  };
  return arr;
};

let inputArr = [
  88,76,31,80,13,23,79,38,40,15,
  12,52,33,57,74,82,56,24,77,8,
  64,70,67,84,20,48,44,98,94,11,
  4,27,58,73,2,16,9,3,53,100,39,
  49,26,97,55,25,81,32,37,36,21,
  43,63,29,96,14,46,10,91,89,65,
  87,1,7,86,54,18,5,60,93,50,22,
  78,6,99,28,83,90,92,51,35,66,
  41,17,71,19,42,68,47,59,85,62,
  95,61,72,30,75,69,34,45
];

console.log(countSort(inputArr, 1, 100));