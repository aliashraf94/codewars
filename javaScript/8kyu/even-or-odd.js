// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Note: Use conditional (ternary) operator!

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

// Using If else

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
  }