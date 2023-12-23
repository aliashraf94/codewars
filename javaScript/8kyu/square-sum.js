// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

// My Solution

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + num **2, 0)
  }

// Other Solution

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }