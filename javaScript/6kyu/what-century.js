// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// My solution

function whatCentury(year) {
    const century = Math.ceil(parseInt(year) / 100);

    // Determine the suffix based on the century
    let suffix;
    if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
        suffix = "th";
    } else {
        switch (century % 10) {
            case 1:
                suffix = "st";
                break;
            case 2:
                suffix = "nd";
                break;
            case 3:
                suffix = "rd";
                break;
            default:
                suffix = "th";
        }
    }

    return century + suffix;
}


// Other Solution

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}


//  Other Solution

function whatCentury(year) {
    var century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + "th";
    switch (century % 10) {
      case 1: return century + "st";
      case 2: return century + "nd";
      case 3: return century + "rd";
      default: return century + "th";
    }
  }