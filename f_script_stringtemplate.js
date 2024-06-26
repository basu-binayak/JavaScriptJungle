////////////////////////////////////
// Strings and Template Literals
const fName = 'Alex';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const alex = "I'm " + fName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(alex);

const alexNew = `I'm ${fName}, a ${year - birthYear} year old ${job}!`;
console.log(alexNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
