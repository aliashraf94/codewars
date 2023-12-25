// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My Solution

const solution = string => string.split(/(?=[A-Z])/).join(" ")

// Other Solution

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

// Some other

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

// Another one 

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
  }