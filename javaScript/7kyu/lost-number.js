// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).


// My solution

function findDeletedNumber(originalArray, mixedArray) {
    // Calculate the sum of the original sequence
    const originalSum = originalArray.reduce((sum, num) => sum + num, 0);

    // Calculate the sum of the mixed array
    const mixedSum = mixedArray.reduce((sum, num) => sum + num, 0);

    // Find the missing number by subtracting mixedSum from originalSum
    const missingNumber = originalSum - mixedSum;

    return missingNumber;
}


// other solution

function findDeletedNumber(arr, mixArr) {
    return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
  }

// other solution

function findDeletedNumber(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
  }