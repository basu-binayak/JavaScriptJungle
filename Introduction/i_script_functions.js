'use strict'

// functions 
////////////


/////////////////////////
// function declaration 
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

////////////////////////
// function expression
const greeting = function(name) {
    return `Hello, ${name}!`;
};

console.log(greeting);
// output
// ƒ (name) {
//     return `Hello, ${name}!`;
// }

console.log(greeting('Bob')); // Output: Hello, Bob!


// Arrow function
//////////////////

const hello = (name) => {
    return `Hello, ${name}!`;
}

console.log(hello('Anish')); // Hello Anish

// For shorter functions, you can omit the curly braces and return statement:
const newhello = name => `Hello, ${name}!`;

console.log(newhello('Dave')); // Output: Hello, Dave!

// Function with default parameters
////////////////////////////////////
function greets(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greets()); // Output: Hello, Guest!
console.log(greets('Eve')); // Output: Hello, Eve!

// Higher Order Function
// A function that takes another function as an argument or returns a function
///////////////////////////////////////////////////////////////////////////////

function repeat(action, times){
    for(let i=0; i< times; i++){
        action();
    }
}

repeat(()=>console.log(`Hello!`), 3);//Hello Hello Hello

