// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution

function findShort(s) {
    // Split the string into an array of words
    const words = s.split(' ');

    // Initialize a variable to store the length of the shortest word
    let shortestLength = Infinity;

    // Iterate through each word to find the shortest one
    for (const word of words) {
        const length = word.length;
        if (length < shortestLength) {
            shortestLength = length;
        }
    }

    return shortestLength;
}

// Other Solution

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}