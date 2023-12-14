// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My solution

function distinct(a) {
    const uniqueArr = [];
    for (const num of a) {
      if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
      }
    }
    return uniqueArr;
  }

// Other Solution

function distinct(a) {
    return [...new Set(a)];
  }

// Other one with for loop


function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }