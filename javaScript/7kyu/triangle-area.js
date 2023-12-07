// DESCRIPTION:
// Task.

// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// Hints

// Ignore dots.

// All triangles will be right isoceles.

// Example:

// .
// .      .  
// .      .       .      ---> should return 2.0

// .
// .      .  
// .      .       .     
// .      .       .      .      ---> should return 4.5

// My soultion

function tArea(tStr) {
    // Count the number of lines in the string
    const lines = tStr.split('\n').filter(line => line.trim() !== '');

    // Calculate the area using the formula: area = (base * height) / 2
    const base = lines.length - 1; // The base is one less than the number of lines
    const height = lines.length;

    const area = (base * height) / 2;
    return area;
}