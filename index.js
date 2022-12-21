// JavaScript Data Types 

/* Primitive / Value Types */

var firstName = 'Mary'; // string
var age = 27; // number
var recedingHairline = false; // boolean
var favFood; // undefined
var toiletPaper = null; // null

toiletPaper = 24;
toiletPaper = null;
toiletPaper = 'Triple Ply';

console.log('Value: ', firstName);
console.log('Type: ', typeof firstName);

console.log('Value: ', age);
console.log('Type: ', typeof age);

console.log('Value: ', recedingHairline);
console.log('Type: ', typeof recedingHairline);

console.log('Value: ', favFood);
console.log('Type: ', typeof favFood);

console.log('Value: ', toiletPaper);
console.log('Type: ', typeof toiletPaper);

/* Reference Type / Structural Types */

// Objects 
var person = {
  firstName: 'Mary',
  age: 27,
  recedingHairline: false, 
  favFood,
  toiletPaper: 206, 
}


console.log('Value: ', person);
console.log('Type: ', typeof person);

// Arrays 
var students = ['Orion', 'Kingston', 'Shayla', 'Chloe'] 

console.log('Value: ', students);
console.log('Type: ', typeof students);

// Functions
var myFunk = function() {
  // run some code
  // You dont run functions in console
}

console.log('Value: ', myFunk);
console.log('Type: ', typeof myFunk);


