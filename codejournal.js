// in line commenting

/*multi-line
commenting is done like
this.*/

// Variables - containers that store values 


var name; // a declared variable, but not initialized and it's in the global scope (BAD)

let foo; // a declared variable that can be changed

//const bar; // a declared variable that cannot be changed - short for 'constant'

const ANSWER = 42; // const is declared and initialized with the value 42

// Strings

let string1 = "Hello World!" // this is a 'string literal' example and the preferred way

let string2 = new String("Hello World!") // using a 'constructor'

// Number

let myNum = 20389743

let myDecimal = 73.4  // could also call this a float

// Boolean

let myBool = true

// Array

let myArray = [] // this is an empty array

//              0     1      2        3      4
let myArray2 = [42, "Bob", myBool, ANSWER, true];

let secondElement = myArray2[1] // the second position is at index #1

// Object

let minObject = {}

const myCar = {
  make: "Chevrolet",
  color: "Red",
  year: "1965",
  vin: "2390487sijweoru38lirehs"
}

myCar.numDoors = 4

const anotherObject = {
  wordz: ["foo", "bar", "baz"],
  car: {
    make: "McLaren",
    model: "675LT"
  },
  awesomeness: true
};

// Functions

function myFunction() {
  return "My greeting to you..."
}

function sumTwoThings(one, two) {
  // watch out for data type issues here!
  return one + two // if numbers, will add them.  If strings, will concatenate.
}

// Arrow Functions

// basic syntax is num => 'The Num'

// a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

const theFunction = () => {
  //multiple lines use curly braces and 'return' keyword
  return "I am awesome"
};

// Filter method example.  Filter returns an array of all elements that 'pass the test'
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels")
const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire"
});