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