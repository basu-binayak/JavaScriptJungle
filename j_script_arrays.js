'use strict';

// Arrays 
//////////

// Arrays in JavaScript are used to store multiple values in a single variable. Theycan hold elements of different types, including numbers, strings, objects, and even other arrays. Here are some key concepts and examples to help you understand arrays in JavaScript.

// Creating Arrays
// Using Array Literal
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Using new Array()
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Accessing Array Elements
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Cherry"

// Modifying Array Elements (note this)
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Array Properties and Methods
////////////////////////////////

// length Property
console.log(fruits.length); // Output: 3

// push() Method
fruits.push('Date');
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// pop() Method
let popped = fruits.pop();
console.log(popped); // Date
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// shift() Method
let shifted = fruits.shift();
console.log(shifted); // Apple
console.log(fruits); // Output: ["Blueberry", "Cherry"]

// unshift() Method
fruits.unshift('Apple');
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// indexOf() Method (returns -1 if the element is not present)
console.log(fruits.indexOf('Blueberry')); // Output: 1
console.log(fruits.indexOf('Grapes')); // Output: -1

// includes() Method - returns true / false
console.log(fruits.includes('Blueberry')); // Output: true
console.log(fruits.includes('Grapes')); // Output: false

// Looping Through Arrays
//////////////////////////

// Using for Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// Apple
// Blueberry
// Cherry

// Using for...of Loop
for (const fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Blueberry
// Cherry

// Using forEach() Method
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Apple
// Blueberry
// Cherry

// Array Methods for Transformation and Filtering

// map() Method
const squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter() Method
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// reduce() Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Sample array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Using the reduce() method to sum all the numbers in the array
// The reduce() method takes two arguments:
// 1. A reducer function, which is applied to each element in the array
// 2. An initial value, which is used as the first argument to the first call of the reducer function

// The reducer function takes two arguments:
// 1. accumulator - It accumulates the callback's return values
// 2. currentValue - The current element being processed in the array

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // Adds the current value to the accumulator
}, 0); // 0 is the initial value for the accumulator

// Logging the sum of the array elements
console.log(sum); // Output: 15

// Explanation:
// First iteration: accumulator = 0 (initial value), currentValue = 1, return 0 + 1 = 1
// Second iteration: accumulator = 1, currentValue = 2, return 1 + 2 = 3
// Third iteration: accumulator = 3, currentValue = 3, return 3 + 3 = 6
// Fourth iteration: accumulator = 6, currentValue = 4, return 6 + 4 = 10
// Fifth iteration: accumulator = 10, currentValue = 5, return 10 + 5 = 15
// The final result is 15

// Nested Arrays (Multidimensional Arrays)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6

// Destructuring Arrays
const [first, second, third] = fruits;
console.log(first); // Output: Apple
console.log(second); // Output: Blueberry
console.log(third); // Output: Cherry
