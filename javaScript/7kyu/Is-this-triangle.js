// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).


// Certainly! You can use the triangle inequality theorem to determine whether a triangle is possible with the given side lengths.
// According to the theorem, the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.
// Additionally, all side lengths must be greater than 0 for a valid triangle.

// My Solution
function isTriangle (a,b,c) {
    if ( a + b > c && b + c > a && c + a > b && a > 0 && b > 0 && c > 0 ){
        return true
    } else {
        return false
    }
}

// Another Solution
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}