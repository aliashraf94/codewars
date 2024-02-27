// You order a shirt for your friend that has a word written in sign language on it, you would like to fool your friend into thinking it says something other than what it actually says.

// Your friend is smart, but he can't know what he doesn't already know, he only knows a certain amount of letters in sign language. Given the word on the shirt, the word you are attempting to make your friend believe is on the shirt, and the letters in sign language your friends knows, figure out if he can tell that you are fooling him. Return true if your friend can figure out you are fooling him, otherwise return false.

// It is guaranteed that both words will be the same length and will be in lowercase letters (a-z)

// Example 1:
// Word on shirt: snack
// Word you said: snake
// Letters your friend knows: [c]

// return true
// Your friend knows the 4th letter is a c rather than a k.

// Solution

const gaslighting = (shirtWord, yourWord, friendsLetters) => {
    if (shirtWord === yourWord) return false
  
    for (let i = 0; i < shirtWord.length; i++) {
      const a = shirtWord[i]
      const b = yourWord[i]
      const res = new RegExp(`[${a}${b}]`).test(friendsLetters)
  
      if (a !== b && res) return true
    }
  
    return false
  }

  // Other Solution

  function gaslighting(shirtWord,yourWord,friendsLetters) {
    if (shirtWord === yourWord) return false;
    const len = shirtWord.length;
    if (yourWord.length !== len) return true;
    
    const known = new Set(friendsLetters);
    for (let i = 0; i < len; ++i) {
      const [sc, yc] = [shirtWord[i], yourWord[i]];
      if (sc !== yc && (known.has(sc) || known.has(yc))) return true; 
    }
    return false;
  }