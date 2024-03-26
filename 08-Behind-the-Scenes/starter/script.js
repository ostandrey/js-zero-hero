'use strict';

const a = 'hey';
first();

function first(params) {
  const b = 'hello';
  second();

  function second(params) {
    const c = 'hi';
    third();
  }
}

function third(params) {
  const d = 'good morning';
  // console.log(a + b + c + d);
}

// ---->  This key word
// This in strict mode => undefined; This without strict mode => global object (window)
// Arrow function has lexical this - this of surrounding function

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2033 - birthYear);
//   console.log(this);
// };

// calcAge(1978);

// const calcAgeArrow = birthYear => {
//   console.log(2033 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1978);

// const bob = {
//   name: 'Bob',
//   getName: function (params) {
//     const name = 'rob';
//     return this.name + name;
//   },
// };

// console.log(bob.getName());

// ====> Regular functions and arrow functions
const bob = {
  name: 'Bob',
  getName: function (params) {
    return this.name;
  },
};

// ===> Primitives and Objects
let person1 = 'Bob';
let person2 = person1;
person1 = 'rob';
// Primitives -> Identifier 'person1' assign to address in memory 0001 that have a value 'Bob'
// console.log(person1, person2); // -> rob, bob

const person3 = {
  name: 'Bob',
};

const person4 = person3;
person3.name = 'Rob';
// objects -> Referense type, identifier 'person4' assign to address in memory stack to value address in heap, that contain value of obj
// console.log(person3.name, person4.name); // -> Rob, rob

// Shallow copying objects
const person3Copy = Object.assign({}, person3);
person3Copy.name = 'Lob';
console.log(person3Copy);
