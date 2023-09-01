// interfaces 
interface isChap {
    name: string;
    age: number;
    speak(sentence: string): void;
    spend(amount: number): number;
}

const me: isChap = {
    name: 'George',
    age: 37,
    speak(sentence: string): void {
        console.log(sentence);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
}

const insultPerson = (person: isChap) => {
    console.log(`screw you ${person.name}... `);
    person.speak('no screw you')
} 

insultPerson(me) 


import { Invoice } from './classes/Invoice.js'; 


 //create an Invoice instance
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

 console.log(invOne);  
 
 let invoices: Invoice[] = [];  
//  invoices.push('duck');

  invoices.push(invOne);
  invoices.push(invTwo);

  invoices.forEach(inv => {
    // inv.client = 'change'; // error because client is readonly
    console.log(inv.client, inv.amount, inv.format());
  })
  

 
 const anchor = document.querySelector('a')!;

//  console.log(anchor.href);
 
 anchor.querySelector

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log( form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement 
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// add an event listener to the form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})