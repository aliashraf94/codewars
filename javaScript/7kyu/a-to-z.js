// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"

// Solution

function gimmeTheLetters(sp) {
    // Extract the first and last letters from the range
    const [start, end] = sp.split('-')
    // Convert the letters to their ASCII codes
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
    // Generate the string of letters
      let result = '';
      for (let i = startCode; i <= endCode; i++) {
          result += String.fromCharCode(i);
      }
  
      return result;
  }

// Other Solution

function gimmeTheLetters(sp) {
    let s = ""
    for(let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) s += String.fromCharCode(i)
    return s
  }