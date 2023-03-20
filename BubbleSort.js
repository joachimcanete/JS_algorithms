//*---= Suboptimal =---*\\
let arrCase = [10,9,8,7,6,5,4,3,2,1]
// declare func with arr as arrgument
function bubbleSort(arr) {
	// loop through the length of the array	
	for(let i=0;i<arr.length;i++) {
		// since the internal if statement is run through each iteration
		// we don't need to iterate over the final array element
		// hence '(arr.lenght-i-1)'
		for (let j=0;j<(arr.length-i-1);j++) {
			// if the first is greater than the second
			// initiate the swap
			if(arr[j] > arr[j+1]) {
				// greater takes temp spot
				var temp = arr[j];
						// lesser takes lesser spot
						arr[j] = arr[j+1];
						// greater takes greater spot
						arr[j+1] = temp;
			};
			console.log(`Temp=${temp}, lesser=${arr[j]}, greater=${arr[j+1]}`);
		};
	};
	console.log(arr);
}
bubbleSort(arrCase);
// output: worstCase - [1,2,3,4,5,6,7,8,9,10]

//*---= Optimal =---*\\
let arrCase = [10,9,8,7,6,5,4,3,2,1]
console.log(arrCase)
function bubSort(arr) {
	var i, j;
	let len = arr.length;
	let sortied = false;

	for (i=0;i<len;i++) {
		sortied = false;
		for(j=0;j<len;j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
						sortied = true;
			};
			// console.log(`Temp=${temp}, lesser=${arr[j]}, greater=${arr[j+1]}`);
			// console.log(sortied)
		};
		if (!sortied) {
			break;
		};
	};
	console.log(arrCase)
};