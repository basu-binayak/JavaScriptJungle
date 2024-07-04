// Datat Types - Primitive 
//////////////////////////

// Number 
let number1 = 40;
let number2 = 40.8;

console.log(typeof(number1)); //number 
console.log(typeof(number2)); // number 

// String

let name = "Alex Fergusson"
console.log(typeof(name)); // string 

// Boolean 
let isSafe = true; // note: true with a small-t
console.log(typeof(isSafe)); //boolean 

// undefined 
let year; // value taken by a variable that is not yet defined 
console.log(year); // undefined 
console.log(typeof year); // undefined 

// Null
let weight = null;
console.log(typeof weight); // object - this is a recognized bug in JS!

// Why is null an object type?
// In JavaScript, null is considered an object type due to a bug in the language's initial implementation that has been preserved for compatibility reasons.

// When JavaScript was first created, there was a desire to keep things simple and reduce the number of types. The typeof operator was intended to return a string indicating the type of the operand. In this implementation, null was represented as a special type of object. The typeof operator returns "object" for null because null is seen as a placeholder for an object that doesn't exist. This is indeed a bug, but it was left as-is to maintain backward compatibility with old code.

// Are undefined and null equal?
console.log(undefined == null); //true
console.log(undefined === null); // false

// Undefined vs. Null
// undefined and null are both used to represent "no value," but they are used in different contexts and are not strictly the same.

// undefined is a primitive value that is automatically assigned to variables that have just been declared or to function parameters for which no argument is provided. It is also the default return value for functions that do not explicitly return anything.

// null is a primitive value that represents the intentional absence of any object value. It is typically assigned to variables to indicate that they are empty or not yet pointing to any object.

// Comparison between undefined and null
// Loose Equality (==)
// The loose equality operator (==) compares two values for equality after converting both values to a common type. In this context, undefined and null are considered loosely equal because they both represent "no value."

// Strict Equality (===)
// The strict equality operator (===) compares two values for equality without type conversion. Because undefined and null are different types (undefined is undefined, and null is an object), they are not strictly equal.
