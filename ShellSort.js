/** SHELL SORT - a variation of INSERTION SORT
 * 
 *  - Recal in inseration sort, element only move one position ahead.
 *    When an element has to be moved far ahead, may movements are involved.
 *    The purpose is to allow an exchange of FAR items.
 * 
 *  - The idea of `ShellSort` is to arrange the list of elements so that,
 *    starting anywhere, taking every `hth` elemenet produces a sorted list.
 *    An array is said to be `h-sorted` if all sublists of
 *    `h'th` elemnt is sorted.
 * 
 *  - Beginning with large values of `h` allows element
 *    to move long distances in original list,
 *    reducing large amounts of disorder quickly and
 *    leaving less work for small `h-sort` steps to do.
 * 
 *    If the list is then `k-sorted` for some smaller integer `k`,
 *    then the list remains `h-sortd`.
 * 
 *    Following this idea for a decreasing sequence of `h`
 *    values ending in `1` is guaranteed to leave a sorted list in the end.
 */

function printArr(arr) {
  let n = arr.length;
  for (let i=0;i<n;i++) {
    console.log(arr[i]+" ");
  }
}

// function for shell sort on arr
function sSort(arr) {
  let n = arr.length;

  // start with a big gape, then reduce gap
  for (let gap=Math.floor(n/2);gap>0;gap=Math.floor(gap/2)) {
    // use gapped insertion sort for gap size.
    // the first gap elements `a[0..gap-1]` are already in gapped order.
    // keep adding one more element until the entire array is gap sorted
    for (let i=gap;i<n;i+=1) {
      // add `a[i]` to elements that have been gap sorted
      // save `a[i]` in temp and make a hole at position `i`
      let temp = arr[i];
      // shift earlier gap-sorted elements up unitl
      // the correct locaiton for `a[i]` is found
      let j;
      for (j=i; j>=gap && arr[j-gap] > temp; j -= gap) {
        arr[j] = arr[j-gap];
      };
      // put temp (original `a[i] in its correct location)
      arr[j]=temp;
    };
  };
  return arr;
};

let arr = [
  382,96,226,136,302,447,433,347,264,465,431,453,272,367,58,489,111,43,22,486,306,492,372,383,432,222,296,290,212,100,206,183,496,254,311,370,394,393,53,169,98,469,160,397,365,362,85,369,167,445,426,168,200,259,184,20,275,152,159,234,266,286,278,248,260,318,157,132,150,274,292,126,441,269,468,351,346,2,151,190,410,224,62,93,487,359,390,336,186,267,32,452,308,288,172,115,374,279,223,114
];
sSort(arr);