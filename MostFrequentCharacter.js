let str = '123456789159784598765152754987262345861829347548763459862831761234987619287311288437738294'
// input is single string

function countingChars (string) {
// decalre the character counter funciton
  const charCount = {};
  // decalre object to store key:value pairs
  let maxChar = '';
  // key
  let maxCharCount = 0;
  // value
  for(let i = 0; i < string.length; i++) {
  // loop through string
    charCount[string[i]] = ++charCount[string[i]] || 1;
    // iterate through the length of the string
    // for each iteration (string[i]),
    // if it does not appear in object charCount, add it (++)
    // otherwise (||), let that iteration's key (string[i]) increase (++) by 1
    // console.log(charCount) //demonstrates 'for loop' in action
  }  
  for(let key in charCount) {
  // loop through each 'key' in object 'charCount'
  // to see which character appears the most
    if(charCount[key] >= maxCharCount) {
      // if the 'charCount[key]' total is greater than the current 'maxCharCount'
      maxCharCount = charCount[key]
      // set it as the new 'maxCharCount'
      maxChar = key;
      console.log(maxChar)
      // in order of character appearance:
      // 'p' has the most chracters, then 'n' has the most characters, then 'o' has the most charachters
    }
  }
  console.log(charCount)
  console.log(`character, '${maxChar}' appears ${maxCharCount} times`); // Step 4
}
countingChars(str)