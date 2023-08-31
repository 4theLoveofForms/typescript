let names = ['Alice', 'Bob', 'Eve'];

// names = 'impossible'; // Type '"impossible"' is not assignable to type 'string[]

names.push('Mallory');

// names.push(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'.
let numbers = [1, 2, 3, 4];

numbers.push(5);

let mixed = ['Apple', 1, 'Orange', 2, 'Banana', 3, true];

mixed.push('Cherry');
mixed.push(4);
mixed[0] = 1;

// objects
let person = {
  name: 'Alice',
  age: 25,
  belt: 'black',
};

// person.name = 30; // Error: Type '30' is not assignable to type 'string'.
person.name = 'crazy eyes';
// person.skills = ['fighting', 'singing']; // Error: Property 'skills' does not exist on type '{ name: string; age: number; belt: string; }'.

person = {
  name: 'Bob',
  age: 30,
  belt: 'orange',
};

// person = {
//   name: 'Bob',
//   age: 30,
//   // belt: 'orange',
// }; // Error: Type '{ name: string; age: number; }' is not assignable to type '{ name: string; age: number; belt: string; }'.

// the initial objest sets how future objects will be shaped.  they must have all the same properties as the initial object
// by default anyway.  I wonder if there is a way to make some optional for example.

// explicit types
