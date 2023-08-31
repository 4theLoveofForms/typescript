// explicit types
var character;
var age;
var isLoggedIn;
// you can declare types if you don't have a value for them yet
//arrays 
var ninjas = [];
// ninjas = [10, 23] // this will throw an error because ninjas is an array of strings
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false); // this will throw an error because mixed is an array of strings and numbers 
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // this is allowed because arrays are objects in javascript
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
