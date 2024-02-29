// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(boolValue) {
    return boolValue ? "Yes" : "No";
  }

// Other Solution

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }