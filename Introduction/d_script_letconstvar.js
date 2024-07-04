// define let, const, var
///////////////////////////

// let 
// reassignment allowed ; redeclaration not allowed
//##################################################
let country = "Russia";
console.log(country); //Russia 

// let country = "USA"; is not allowed since a declaration

country = "USA"
console.log(country); // USA

// let is block scoped 
// ####################
let name = "Father"; // name has a global scope 

{
    let name = "Mother"; // name here is block scoped 
    console.log(name); // Mother 
}

console.log(name); // Father

// consider a function

let n = "Diana";
function name_print(){
    let n = "Alex";
    console.log(n);
}

name_print() // ALex
console.log(n); // Diana

// const
// reassignment or redeclaration - not allowed ; block scoped 

const level = "A";
console.log(level);

// level = "B"; 
// console.log(level); // error! 

// const level = "B"; // error! 

const my_name = 'Walter';
{
    const my_name = "Abhinav";
    console.log(my_name); // Abhinav
}
console.log(my_name); // Walter 

// consider a function

const m = "Diana";

function name_print(){
    const m = "Alex";
    console.log(m);
}

name_print() // ALex
console.log(m); // Diana


// var
// redeclaration - allowed within the same scope ; reassignment - allowed 
// ########################################################################

var height = 175;
console.log(height); //175

var height = 180;
console.log(height); //180

height = 190;
console.log(height); //190

// var is function scoped 
var language= 'Java'

function language_print(){
    var language = "Python";
    console.log(language);
}

console.log(language); // Java
language_print() // Python

// BUT
// var is not block scoped 

var language = "Javascript";

{
    var language = "C++";
    console.log(language); //C++
}

console.log(language); // C++

// Note: if you go to the console in the browser and type console.log(this) it will present all in global scope. The variables declared by var i.e. height and language are also present in this global scope. (this wil be helpful when we create objects and use 'this' keyword in a normal function and an arrow function - you can understand the difference then!)