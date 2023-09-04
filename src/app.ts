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

    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
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

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
// T is going to be what ever type we specify when we create an object that implements this resource.

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'chap',
  data: {name: 'guy'}
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
}

console.log(docThree, docFour);


// Enums 
