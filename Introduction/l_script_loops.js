'use strict';

// For Loop
// Syntax: for (initialization; condition; increment/decrement) { // code block to be executed }
for (let i = 0; i < 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}
// Output:
// For Loop iteration: 0
// For Loop iteration: 1
// For Loop iteration: 2
// For Loop iteration: 3
// For Loop iteration: 4

// While Loop
// Syntax: while (condition) { // code block to be executed }
let j = 0;
while (j < 5) {
    console.log(`While Loop iteration: ${j}`);
    j++;
}
// Output:
// While Loop iteration: 0
// While Loop iteration: 1
// While Loop iteration: 2
// While Loop iteration: 3
// While Loop iteration: 4

// Do...While Loop
// Syntax: do { // code block to be executed } while (condition)
let k = 0;
do {
    console.log(`Do...While Loop iteration: ${k}`);
    k++;
} while (k < 5);
// Output:
// Do...While Loop iteration: 0
// Do...While Loop iteration: 1
// Do...While Loop iteration: 2
// Do...While Loop iteration: 3
// Do...While Loop iteration: 4

// For...in Loop (used for iterating over object properties)
// Syntax: for (key in object) { // code block to be executed }
const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// For...of Loop (used for iterating over iterable objects like arrays, strings, etc.)
// Syntax: for (variable of iterable) { // code block to be executed }
const arr = ['a', 'b', 'c', 'd'];
for (let element of arr) {
    console.log(`For...of Loop element: ${element}`);
}
// Output:
// For...of Loop element: a
// For...of Loop element: b
// For...of Loop element: c
// For...of Loop element: d

// Looping through a string
const str = 'JavaScript';
for (let char of str) {
    console.log(`Character: ${char}`);
}
// Output:
// Character: J
// Character: a
// Character: v
// Character: a
// Character: S
// Character: c
// Character: r
// Character: i
// Character: p
// Character: t

// Using break to exit a loop
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(`Break Example iteration: ${i}`);
}
// Output:
// Break Example iteration: 0
// Break Example iteration: 1
// Break Example iteration: 2

// Using continue to skip an iteration
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(`Continue Example iteration: ${i}`);
}
// Output:
// Continue Example iteration: 0
// Continue Example iteration: 1
// Continue Example iteration: 2
// Continue Example iteration: 4

// Nested Loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3

// Iterating over an array with forEach
const array = [1, 2, 3, 4, 5];
array.forEach(function(element, index) {
    console.log(`Element at index ${index}: ${element}`);
});
// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5
