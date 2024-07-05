// Array destructuring allows you to unpack values from arrays into distinct variables

// Example array of restaurant categories
const categories = ['Italian', 'Vegetarian', 'Organic', 'Gluten-Free'];

// Destructuring the array
const [firstCategory, secondCategory, thirdCategory, fourthCategory] = categories;

// Logging the destructured variables
console.log(firstCategory); // Output: Italian
console.log(secondCategory); // Output: Vegetarian
console.log(thirdCategory); // Output: Organic
console.log(fourthCategory); // Output: Gluten-Free

// Skipping elements in the array during destructuring
const [mainCategory, , secondaryCategory] = categories;
console.log(mainCategory); // Output: Italian
console.log(secondaryCategory); // Output: Organic

// Using the rest pattern to collect the remaining elements
const [primary, ...otherCategories] = categories;
console.log(primary); // Output: Italian
console.log(otherCategories); // Output: ['Vegetarian', 'Organic', 'Gluten-Free']

// Default values during destructuring
const [first, second, third, fourth, fifth = 'Default'] = categories;
console.log(fifth); // Output: Default

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(three); // Output: 3
console.log(four); // Output: 4

// Swapping variables using array destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // Output: 2
console.log(b); // Output: 1

// switching variables 
let [main, ...secondary] = categories;
[secondary, main] = [main, secondary] //switch 
console.log(main); // ['Vegetarian', 'Organic', 'Gluten-Free']
console.log(secondary); // Italian