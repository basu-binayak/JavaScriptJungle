'use strict';

// Creating Objects
// Using Object Literal Syntax
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'Software Developer',
    isMarried: false,
    // Method inside an object
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person); // Output: {firstName: "John", lastName: "Doe", age: 30, job: "Software Developer", isMarried: false}

// Accessing Object Properties
// Dot Notation
console.log(person.firstName); // Output: "John"

// Bracket Notation
console.log(person['lastName']); // Output: "Doe"

// you can take prompt only by using a bracket notation
console.log(person[prompt('Name a property of the object!')]); // Software developer 

// Modifying Object Properties
person.job = 'Senior Developer';
console.log(person.job); // Output: "Senior Developer"

person['isMarried'] = true;
console.log(person.isMarried); // Output: true

// Adding New Properties
person.country = 'USA';
console.log(person.country); // Output: "USA"

// Deleting Properties
delete person.age;
console.log(person.age); // Output: undefined

// Methods in Objects
console.log(person.fullName()); // Output: "John Doe"

// Nested Objects
const company = {
    name: 'Tech Corp',
    location: 'Silicon Valley',
    employees: {
        employee1: {
            name: 'Alice',
            age: 28
        },
        employee2: {
            name: 'Bob',
            age: 32
        }
    }
};

console.log(company.employees.employee1.name); // Output: "Alice"
console.log(company['employees']['employee2']['age']); // Output: 32

// Looping Through Object Properties
// Using for...in Loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// firstName: John
// lastName: Doe
// job: Senior Developer
// isMarried: true
// country: USA
// fullName: function() {...}

// Object Methods
// Object.keys() - Returns an array of a given object's own property names
const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "job", "isMarried", "country", "fullName"]

// Object.values() - Returns an array of a given object's own property values
const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", "Senior Developer", true, "USA", function() {...}]

// Object.entries() - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
const entries = Object.entries(person);
console.log(entries); // Output: [["firstName", "John"], ["lastName", "Doe"], ["job", "Senior Developer"], ["isMarried", true], ["country", "USA"], ["fullName", function() {...}]]

// Destructuring Objects
const { firstName, lastName, job } = person;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"
console.log(job); // Output: "Senior Developer"

// Spread Operator with Objects
const updatedPerson = { ...person, age: 31 }; // note the age ws deleted earlier
console.log(updatedPerson); // Output: {firstName: "John", lastName: "Doe", job: "Senior Developer", isMarried: true, country: "USA", fullName: function() {...}, age: 31}

// Object.freeze() - Freezes an object: other code can't delete or change its properties
const frozenPerson = Object.freeze({ name: 'Jane', age: 25 });
// frozenPerson.age = 26; // This will not change the age property
// console.log(frozenPerson.age); // Output: 25

// Object.seal() - Seals an object: you cannot delete properties but can modify existing ones
const sealedPerson = Object.seal({ name: 'Jake', age: 27 });
sealedPerson.age = 28; // This will change the age property
// delete sealedPerson.name; // This will not delete the name property
console.log(sealedPerson); // Output: {name: "Jake", age: 28}
