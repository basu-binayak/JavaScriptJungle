// Arithmetic Operators
let a = 10;
let b = 3;


console.log("Arithmetic Operators:");
console.log("Addition:", a + b);         // 13
console.log("Subtraction:", a - b);      // 7
console.log("Multiplication:", a * b);   // 30
console.log("Division:", a / b);         // 3.333...
// there is no separate integer division, if the two numbers are integers and when
// they divide if they give an ineteger, then '/' behaves as integer division
console.log("Modulus:", a % b);          // 1
console.log("Exponentiation:", a ** b);  // 1000

// Assignment Operators
let x = 5;
console.log("\nAssignment Operators:");
console.log("Initial value of x:", x);   // 5

x += 3;  // x = x + 3
console.log("x += 3:", x);               // 8

x -= 2;  // x = x - 2
console.log("x -= 2:", x);               // 6

x *= 2;  // x = x * 2
console.log("x *= 2:", x);               // 12

x /= 4;  // x = x / 4
console.log("x /= 4:", x);               // 3

x %= 2;  // x = x % 2
console.log("x %= 2:", x);               // 1

x **= 3; // x = x ** 3
console.log("x **= 3:", x);              // 1

// Comparison Operators
console.log("\nComparison Operators:");
console.log("a == b:", a == b);          // false
console.log("a != b:", a != b);          // true
console.log("a === b:", a === b);        // false
console.log("a !== b:", a !== b);        // true
console.log("a > b:", a > b);            // true
console.log("a < b:", a < b);            // false
console.log("a >= b:", a >= b);          // true
console.log("a <= b:", a <= b);          // false

// Logical Operators
let p = true;
let q = false;

console.log("\nLogical Operators:");
console.log("p && q:", p && q);          // false
console.log("p || q:", p || q);          // true
console.log("!p:", !p);                  // false

// Bitwise Operators
let m = 5;  // (in binary: 0101)
let n = 3;  // (in binary: 0011)

console.log("\nBitwise Operators:");
console.log("m & n:", m & n);            // 1  (in binary: 0001)
console.log("m | n:", m | n);            // 7  (in binary: 0111)
console.log("m ^ n:", m ^ n);            // 6  (in binary: 0110)
console.log("~m:", ~m);                  // -6 (in binary: ...11111010)
console.log("m << 1:", m << 1);          // 10 (in binary: 1010)
console.log("m >> 1:", m >> 1);          // 2  (in binary: 0010)
console.log("m >>> 1:", m >>> 1);        // 2  (in binary: 0010)

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you can't vote yet.";

console.log("\nTernary Operator:");
console.log("Can the person vote?", canVote); // "Yes, you can vote."

// Typeof Operator
let sampleString = "Hello, World!";
let sampleNumber = 42;

console.log("\nTypeof Operator:");
console.log("Type of sampleString:", typeof sampleString); // "string"
console.log("Type of sampleNumber:", typeof sampleNumber); // "number"


// difference between == and ===
console.log(5 == '5');  // true
console.log(true == 1); // true
console.log(null == undefined); // true
console.log('' == 0);   // true
console.log('0' == 0);  // true


console.log(5 === '5');  // false
console.log(true === 1); // false
console.log(null === undefined); // false
console.log('' === 0);   // false
console.log('0' === 0);  // false


// difference between != and !==
console.log(5 != '5');  // false
console.log(true != 1); // false
console.log(null != undefined); // false
console.log('' != 0);   // false
console.log('0' != 0);  // false

console.log(5 !== '5');  // true
console.log(true !== 1); // true
console.log(null !== undefined); // true
console.log('' !== 0);   // true
console.log('0' !== 0);  // true


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Alex')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;
if (money) { // rendered as true 
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) { // true 
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// some special examples 
console.log(0 == false);   // true
console.log(0 === false);  // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false


console.log('' == false);  // true
console.log('' === false); // false

console.log('' == 0);      // true
console.log('' === 0);     // false


console.log([] == false);  // true
console.log([] === false); // false

// This condition will always return 'false' since JavaScript compares objects by reference, not value.

console.log({} == false);  // false
console.log({} === false); // false

console.log([1] == '1');   // true
console.log([1] === '1');  // false