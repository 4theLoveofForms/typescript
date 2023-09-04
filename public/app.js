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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
