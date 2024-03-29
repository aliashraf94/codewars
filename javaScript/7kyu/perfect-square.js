// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// solution

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
  }

// Other solution

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  }