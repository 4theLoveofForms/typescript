import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// console.log( form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = (document.querySelector('ul'));
const list = new ListTemplate(ul);
console.log('list', list);
// add an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
// Generics
// <T> captures what ever properties are on an idem (any item) that we pass in
// <T extends object> is specifically for an object 
// <T extends {name: string} even more specific 
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello')
console.log(docOne);
// Enums 
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// T is going to be what ever type we specify when we create an object that implements this resource.
const docThree = {
    uid: 1,
    resourceName: ResourceType.DIRECTOR,
    data: { name: 'guy' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// tuples 
// the type of data is fixed once it has been initilized
let arr = ['ryu', 25, true];
// arr = 'tits'
let tup = ['ry', 25, true];
// tup[0] = false // error
tup[0] = 'other';
let student;
student = ['chun', 17232];
// what we learned:
// all the basic types, function types, aliases, classes, interfaces, modules and the DOM, 
// Generics, enums, and tuples
