// Task 1
let classA=['An','Binh','Chi']
let classB=classA
classB[0]='An Updated'
console.log("Class A:", classA);
// class A is stored at a memory address ( e.g, 0x01) when assigning classB = classA, both variables point to the same memory address.

// Task 2
let x = "10"
let y = 2
console.log(x + y)
console.log(x - y)
console.log(x * "3")
console.log("Hello" - y)
// + with a string performs string concatenation
// - and * force numeric conversion
// "Hello" cannot be converted into a number -> NaN

//Task 3
let age=9
let mathScore=10
let isVIP=false
//test false
age =9
mathScore=10
isVIP=false
let canEnter = isVIP || (age >= 10 && mathScore > 7);
console.log("Test 1 - Can enter:", canEnter);
//test true
age =9
mathScore=10
isVIP=true
canEnter = isVIP || (age >= 10 && mathScore > 7);
console.log("Test 2 - Can enter:", canEnter);
// !(age<10) same as age>=10 because operator  will negate the boolean value of expression inside the parentheses

//Task 4
const laptop={
    brand:"Dell",
    price:1000,
    spec:{
        ram:"8GB",
        ssd:"256GB"
    }
}
const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);
//Prediction Before Running the Code
// laptop.brand → "Apple"
// laptop.spec.ram → "16GB"
//exp:
// When you assign an object to another variable, you’re not creating a new copy—you’re just copying the reference (the memory address) to the same underlying object.
//const myLaptop = laptop;
// → Both myLaptop and laptop point to the same object.
// So when you change myLaptop.brand = "Apple", it updates the original laptop object too.
//
// const mySpec = laptop.spec;
// → mySpec points to the same nested object inside laptop.
// So when you change mySpec.ram = "16GB", it updates laptop.spec.ram.