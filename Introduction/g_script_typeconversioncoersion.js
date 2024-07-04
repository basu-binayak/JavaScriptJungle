
// Type Conversion and Coercion
////////////////////////////////

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 , '1991'
console.log(Number(inputYear) + 18); 2009

console.log(Number('Alex')); //NaN
console.log(typeof NaN); // number (note this fact!)

console.log(NaN + 10); // NaN

console.log(String(23), 23); // '23' , 23

// type coercion
console.log('I am ' + 23 + ' years old'); // I am 23 years old 
console.log('23' - '10' - 3); // 10
console.log('23' / '2'); // 11.5

console.log(5+5+'5'); // 105
console.log('5'+5+5); // 555

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n); // 10
