// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:

//   doubleCheck("abca")
//   //returns false
  
//   doubleCheck("aabc")
//   //returns true
  
//   doubleCheck("a 11 c d")
//   //returns true


// My Solution

function doubleCheck(str){
  
    let lowerCaseStr = str.toLowerCase()
    
    for ( let i=0; i < lowerCaseStr.length -1; i++ ){
      
      if (lowerCaseStr[i] === lowerCaseStr[i+1]){
        return true
      }
    }
    return false
  }

  // Other solution - I have no clue what just happend here

  const doubleCheck = (str) => /(.)\1/i.test(str);

  // Other solution

  function doubleCheck(str){
    let strArr = str.toLowerCase().split("");
    return strArr.some((c, i) => c === strArr[i + 1]);
}