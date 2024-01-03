// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// My Solution 

function doubleChar(str) {
    let result = "";
  
    for (const char of str) {
      result += char + char;
    }
    return result;
  }

// Other one

const doubleChar = (str) => str.split("").map(c => c + c).join("");

// Another one 

function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};