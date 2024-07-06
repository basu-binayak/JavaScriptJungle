// spread operator ...

// Example 
const one_arr = [1,2,3,4]
const another_arr = [5,6,7,8,9]

console.log([...one_arr , ...another_arr]); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([one_arr, another_arr]); // [[1,2,3,4],[5,6,7,8,9]]


// 1. Spreading elements of an array
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['mango', ...fruits, 'pineapple'];
console.log(moreFruits);
// Output: ['mango', 'apple', 'banana', 'cherry', 'pineapple']

// 2. Combining two objects
const person = {
    name: 'John',
    age: 25
  };
  
  const job = {
    title: 'Software Developer',
    company: 'Tech Corp'
  };
  
  const personWithJob = { ...person, ...job };
  console.log(personWithJob);
  // {name: 'John', age: 25, title: 'Software Developer', company: 'Tech Corp'}

  // 3. Spreading a string into an array of characters
const word = 'hello';
const characters = [...word];
console.log(characters);
// Output: ['h', 'e', 'l', 'l', 'o']

// 4. Combining strings using the spread operator
const greet = 'Hi';
const name = 'John';
const combined = [...greet, ' ', ...name].join('');
console.log(combined);
// Output: 'Hi John'

// 5. Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);
// Output: [1, 2, 3]

// 6. Passing array elements as individual arguments to a function.
// Using the spread operator, we can spread the elements of the array so that they are passed as individual arguments to the function:
const sum = (a, b, c) => a + b + c;

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6

///////////////////////////////////Note//////////////////////////////////////////////
//spread operator works on iterables (array, strings, sets, maps) and also Objects!
/////////////////////////////////////////////////////////////////////////////////////