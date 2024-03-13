// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution

function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Iterate through each word and reverse it
    const reversedWords = words.map(word => {
        // Reverse the word using split, reverse, and join
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a string with spaces
    const reversedString = reversedWords.join(' ');

    return reversedString;
}

// Other Solution

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }


  // Other Solution
  
  function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }