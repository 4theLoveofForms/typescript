"use strict";
let greet;
// let greet = "hello " // error TS2454: Variable 'greet' is used before being assigned.
greet = () => {
    console.log("hello world");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
    //  this returns void
};
add(5, 10, "fish");
// there is also undefined that could happen 
const adding = (a, b, c) => {
    console.log(a + b);
    console.log(c);
    //  this returns void
};
adding(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7); // result is inferred to be a number
// result = "something else" // error TS2322: Type '"something else"' is not assignable to type 'number'.
// const minus = (a:number, b:number):number => {
//   return a + b
// }
// you can do this but it's redundant, but it can help other developers know what it should be returning
