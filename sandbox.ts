// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

// you can declare types if you don't have a value for them yet

//arrays 
let ninjas: string[] = [];

// ninjas = [10, 23] // this will throw an error because ninjas is an array of strings
ninjas.push('shaun');

// union types
let mixed: (string | number )[] = [];
mixed.push('hello');
mixed.push(20); 
// mixed.push(false); // this will throw an error because mixed is an array of strings and numbers 

let uid: string | number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // this is allowed because arrays are objects in javascript

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };