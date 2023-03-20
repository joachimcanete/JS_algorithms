let unSorted = [13,12,11,10,9,8,7]
console.log(unSorted)
// InsertionSort to be used within bucket sort

function insertSort(arr) {
  let len = arr.length;
  for (let i=1;i<len;i++) {
    let temp = arr[i];
    for (var j=i-1;j>=0 && arr[j] > temp;j--) {
      arr[j+1] = arr[j];
    };
    arr[j+1] = temp;
  };
  return arr;
};

// bucket sort

function buckSort(arr, bucketSize) {
  // base-case / termination-case
  if (arr.length === 0) {
    return arr;
  };

  // declare vars

  var i,
      minVal = arr[0],
      maxVal = arr[0],
      bucketSize = bucketSize || 5;

  // settig min / max values
  arr.forEach(function (curVal) {
    if (curVal < minVal) {
      minVal = curVal;
    } else if (curVal > maxVal) {
      maxVal = curVal;
    };
  });

  // initialize buckets
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);

  for (i=0;i<allBuckets.length;i++) {
    allBuckets[i] = [];
  };

  // push vals to buckets
  arr.forEach(function (curVal) {
    allBuckets[Math.floor((curVal - minVal) / bucketSize)].push (curVal);
  });

  // sort buckets
  arr.length = 0;

  allBuckets.forEach(function (bucket) {
    insertSort(bucket);
    bucket.forEach(function (ele) {
      arr.push(ele);
    });
  });
  return arr;
}

console.log(buckSort(unSorted))