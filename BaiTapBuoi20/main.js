
// 1. Variable declaration and console.log
let name = "Tien";
let age = 22;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);

// Initialize and change the value of a variable

let a = 5;
let b = 10;
a = 10;
b = 5;

// 2. const / let / var

//Reassignment.
//let: Can be reassigned
//const: Cannot be reassigned

//Initialization.
//let: Can be declared without an initial value
//const: Must be initialized immediately

//Objects/Arrays.
//let: Can reassign to a new object/array
//const: Cannot reassign to a new object/array, but can modify contents inside

// When should you use const?
//You should use const when the value of a variable does not need to be reassigned after initialization.
//This makes your code clearer, easier to maintain, and reduces the risk of accidental changes.

// const  = 10;
// x = 20;
// false -> The variable "x" is assigned without being declared, you cannot use "const" as a variable name.

// 3. Data type

// Identify data types
// 100                      number
// "100"                    string
// true                     boolean
// [1, 2, 3]                array (special object)
// {name: "An", age: 20}    object
// null
// undefined

// Create an object

const student = {
    name: "Tien",
    age: 22,
    scores: [8, 9, 10]
}
console.log(student);

// 4. Type casting.

// "1000" → number
let strNum = Number("1000");
console.log(strNum, typeof strNum);

// 1000 → string
let strVal = String(1000);
console.log(strVal, typeof strVal);

// true → string
let boolStr = String(true);
console.log(boolStr, typeof boolStr);

// 5. Truthy / Falsy (Logical thinking)

//  Boolean(0)          -> false
//  Boolean(1)	        -> true
//  Boolean("")	        -> false
//  Boolean("hello")    -> true
//  Boolean(null)	    -> false
//  Boolean([])	        -> true

// 6. Arrays & memory

const number = [4, 3, 1, 5, 1];
console.log("the first value of the array:", number[0]);
console.log("the final value of the array:", number[4]);

//  Why, when assigning:
//  const a = numbers;
//  do 'a' and 'numbers' refer to the same memory location?

// For primitive types (number, string, boolean, null, undefined, symbol, bigint), assigning a value creates a copy of that value.
// For reference types (objects, arrays, functions), assigning a variable does not create a full copy of the data.
// -> 'a' and 'numbers' are linked to the same memory because arrays are reference types, and assignment only copies the reference, not the entire data.