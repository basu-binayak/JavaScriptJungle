// Object destructuring

// Example object representing a restaurant
const restaurant = {
    name: 'Gourmet Haven',
    loc: '123 Culinary St, Food City, FC 12345',
    categories: ['Italian', 'Vegetarian', 'Organic', 'Gluten-Free'],
    starterMenu: ['Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Caesar Salad'],
    mainMenu: ['Margherita Pizza', 'Pasta Carbonara', 'Grilled Salmon', 'Eggplant Parmesan']
};

// Destructuring the object
const { name, loc, categories, starterMenu, mainMenu } = restaurant;

// Logging the destructured variables
console.log(name); // Output: Gourmet Haven
console.log(loc); // Output: 123 Culinary St, Food City, FC 12345
console.log(categories); // Output: ['Italian', 'Vegetarian', 'Organic', 'Gluten-Free']
console.log(starterMenu); // Output: ['Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Caesar Salad']
console.log(mainMenu); // Output: ['Margherita Pizza', 'Pasta Carbonara', 'Grilled Salmon', 'Eggplant Parmesan']

// Destructuring with different variable names
const { name: restaurantName, loc: restaurantLocation } = restaurant;
console.log(restaurantName); // Output: Gourmet Haven
console.log(restaurantLocation); // Output: 123 Culinary St, Food City, FC 12345

// Destructuring with default values
const { owner = 'Chef John' } = restaurant;
console.log(owner); // Output: Chef John

// Question: Does it add the new property to the object? NO
console.log(restaurant.owner); //undefined 

// Nested object destructuring
const restaurantNested = {
    name: 'Gourmet Haven',
    address: {
        street: '123 Culinary St',
        city: 'Food City',
        state: 'FC',
        zip: '12345'
    }
};

const { address: { street, city, state, zip } } = restaurantNested;
console.log(street); // Output: 123 Culinary St
console.log(city); // Output: Food City
console.log(state); // Output: FC
console.log(zip); // Output: 12345

// Destructuring in function parameters
const printRestaurantDetails = ({ name, loc, categories }) => {
    console.log(`Name: ${name}`);
    console.log(`Location: ${loc}`);
    console.log(`Categories: ${categories.join(', ')}`);
};

printRestaurantDetails(restaurant);
// Output:
// Name: Gourmet Haven
// Location: 123 Culinary St, Food City, FC 12345
// Categories: Italian, Vegetarian, Organic, Gluten-Free

// create a new object say newrestaurant
const newrestaurant = {
    name: 'Gourmet Haven',
    loc: '123 Culinary St, Food City, FC 12345',
    categories: ['Italian', 'Vegetarian', 'Organic', 'Gluten-Free'],
    starterMenu: ['Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Caesar Salad'],
    mainMenu: ['Margherita Pizza', 'Pasta Carbonara', 'Grilled Salmon', 'Eggplant Parmesan'],
    printDetails: ({ name, loc, categories }) => {
        console.log(`Name: ${name}`);
        console.log(`Location: ${loc}`);
        console.log(`Categories: ${categories.join(', ')}`);
    }
};

newrestaurant.printDetails({
    name: 'Chinatown Noodles',
    categories:['Chinese', 'Indian', 'Vegetarian', 'Organic', 'Italian'],
    loc:'New Delhi'
});

// Name: Chinatown Noodles
// Location: New Delhi
// Categories: Chinese, Indian, Vegetarian, Organic, Italian

// Mutating variables during destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a); // Output: 23
console.log(b); // Output: 7

// Using rest pattern with object destructuring
const { name: restName, ...otherDetails } = restaurant;
console.log(restName); // Output: Gourmet Haven
console.log(otherDetails); 
// Output: { location: '123 Culinary St, Food City, FC 12345', categories: [ 'Italian', 'Vegetarian', 'Organic', 'Gluten-Free' ], starterMenu: [ 'Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Caesar Salad' ], mainMenu: [ 'Margherita Pizza', 'Pasta Carbonara', 'Grilled Salmon', 'Eggplant Parmesan' ] }
