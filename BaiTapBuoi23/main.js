// Lesson 1:  Triangle Classification

const getTriangleType = ( a, b, c) => {
    const isTriangle = (a + b > c) && (b + c > a) && (c + a > b);
    const isEquilateral = (a == b && b == c);
    const isIsosceles = (a == b || b == c || a == c);
    const isRight = (a ** 2 === b ** 2 + c ** 2) || (b ** 2 === a ** 2 + c ** 2) || (c ** 2 === a ** 2 + b ** 2);

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || a <= 0 || b <= 0 || c <= 0) {
        return "Invalid input"
    } else if (!(isTriangle)) {
        return "Not a triangle"
    } else if (isEquilateral) {
        return "Equilateral triangle";
    } else if (isIsosceles) {
        return "Isosceles triangle"
    } else if (isRight) {
        return "Right triangle"
    } else {
        return "Scalene triangle"
    }
}
console.log(getTriangleType(7, 7, 7));

// Lesson 2: Perfect Square Check

function isPerfectSquare(x) {
    if (typeof x !== 'number' || x < 0 ) {
        return false
    } else {
        return (x ** 0.5) % 1 === 0;
    }
}
console.log(isPerfectSquare(9))
