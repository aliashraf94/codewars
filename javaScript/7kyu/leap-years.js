// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// My solution

function isLeapYear(year) {
    // Years divisible by 4 are leap years
    // Years divisible by 100 are not leap years, unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


// Other solution

function isLeapYear(year) {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
  }