// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// My solution

function removeSmallest(numbers) {
    if (!numbers.length) {
          return [];
      }
  
      // Find the index of the smallest element
      const minIndex = numbers.indexOf(Math.min(...numbers));
  
      // Create a new array without the smallest element
      const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
  
      return result;
  }


  // Other solution

  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

  // Shortest one

  const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));