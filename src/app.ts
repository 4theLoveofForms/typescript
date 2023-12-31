import { Invoice } from './classes/Invoice.js'; 
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log( form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement 
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = (document.querySelector('ul'))!;
const list = new ListTemplate(ul)
console.log('list', list);


// add an event listener to the form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] 
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(...values)
    } else {
      doc = new Payment(...values)
    }

    console.log(doc);
    list.render(doc, type.value, 'end')

})


// Generics
// <T> captures what ever properties are on an idem (any item) that we pass in
// <T extends object> is specifically for an object 
// <T extends {name: string} even more specific 
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40})
// let docTwo = addUID('hello')

console.log(docOne);


// Enums 
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}
// T is going to be what ever type we specify when we create an object that implements this resource.

const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.DIRECTOR,
  data: {name: 'guy'}
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.BOOK,
  data: ['bread', 'milk']
}

console.log(docThree, docFour);


// tuples 
// the type of data is fixed once it has been initilized

let arr = ['ryu', 25, true]
// arr = 'tits'
 
let tup: [string, number, boolean] = ['ry', 25, true]
// tup[0] = false // error
tup[0] = 'other'

let student: [string, number];
student = ['chun', 17232];


// what we learned:
// all the basic types, function types, aliases, classes, interfaces, modules and the DOM, 
// Generics, enums, and tuples
