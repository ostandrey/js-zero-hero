// 'use strict';

// greeting = 'hello';
// Error = ReferenceError: greeting is not defined
// console.log(greeting);

// let hasDriversLicense = false;
// const passTest = true;
// // ReferenceError: hasDriverLicense is not defined
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('i can drive');

// reserved words
// SyntaxError: Unexpected token 'if'
// const if = 123;

// ==> Functions

function logger(params) {
  // console.log('My name is Bob');
}
// run / invoke func
logger();

// params

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// -> Declaration & expression

// -func declaration
function calcAge1(birthYear) {
  return 2035 - birthYear;
}

const age1 = calcAge1(1985);
// console.log(age1);

// -func expression
const calcAge2 = function (birthYear) {
  return 2035 - birthYear;
};

const age2 = calcAge2(1985);

// console.log(age1, age2);

// -> Arrow functions

const calcAge3 = (birthYear) => {
  return 2035 - birthYear;
};

// Another variant
// const calcAge3 = (birthYear) => 2035 - birthYear;

const age3 = calcAge3(1958);
// console.log(age3);

// -> Functions calling other functions

function cutFruitPieces(fruit, reps) {
  return fruit * reps;
}

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples, 4);
  const orangePieces = cutFruitPieces(oranges, 4);

  const juice = `juice with ${applePieces} pieces of apple  and ${orangePieces} pieces of oranges`;
  return juice;
}

// console.log(fruitProcessor(5, 3));

// => Challenge 1

const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;
};

let avgDolp = calcAverage(44, 23, 71);
let avgKoala = calcAverage(65, 54, 49);

const checkWinner = (avgDolp, avgKoala) => {
  if (avgDolp >= avgKoala * 2) {
    console.log(`dolphins win (${avgDolp} vs ${avgKoala})`);
  } else if (avgKoala >= avgDolp * 2) {
    console.log(`koala win (${avgKoala} vs ${avgDolp})`);
  } else {
    console.log(`no one wins`);
  }
};

// console.log(checkWinner(avgDolp, avgKoala));

avgDolp = calcAverage(85, 54, 41);
avgKoala = calcAverage(23, 34, 27);

// console.log(checkWinner(avgDolp, avgKoala));

// => Challenge 2
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
// i know can be loop
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, total);

// ===> Arrays
const friends = ['Bob', 'Rob', 'Chop'];

const years = new Array(1991, 1992, 1993);

// console.log(friends[0], friends.length, friends[friends.length - 1]);

friends[2] = 'Mob';

const firstNameRob = 'Rob';
const rob = [firstNameRob, 'Robson', 2034 - 2010, friends];
// console.log(rob);

// ARRAY + STRING = STRING

// --> Array methods

const numbers = [0, 1, 2];

// Add to array
numbers.push(3); //to the end
numbers.unshift(5); //to the start

// console.log(numbers);

// Remove from array
numbers.pop();
numbers.shift();
// console.log(numbers);

// Index
// console.log(numbers.indexOf(1));

// Include
// console.log(numbers.includes(2));

// ===> Objects

const bobsInfo = {
  firstName: 'Bob',
  lastName: 'Bobson',
  birthYear: 1980,
  friends: ['Rob', 'Mob', 'Chop'],
  hasDriverlicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    const driverLicense = this.hasDriverlicense ? 'a' : 'no';
    return `${
      bobsInfo.firstName
    } is a ${bobsInfo.calcAge()}-years old and he has ${driverLicense} driver's license`;
    // return this.hasDriverlicense ? 'a' : 'no';
  },
};

// console.log(bobsInfo.firstName, bobsInfo['friends']);

// Usage of brackets notation, when we want get the property that not expected by dot
// const interestedIn = prompt('what do you want to know about bob?');

// console.log(bobsInfo.interestedIn); // undifined
// console.log(bobsInfo[interestedIn]); //show info

// Add new property
bobsInfo.location = 'Germany';
bobsInfo.mail = '@bobson';

// Challenge
// console.log(
//   `${bobsInfo.firstName} has ${bobsInfo['friends'].length}, the best is ${bobsInfo.friends[0]}`
// );

// --> Object methods

// console.log(bobsInfo.calcAge());
// console.log(bobsInfo.age);
// console.log(bobsInfo.getSummary());

// ===> Challenge 7

const markInfo = {
  firstName: 'mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    return (this.mass / this.height ** 2).toFixed(2);
  },
};

const johnInfo = {
  firstName: 'john',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    return (this.mass / this.height ** 2).toFixed(2);
  },
};

const comparingBmi = (firstPerson, secondPerson) => {
  return `${
    firstPerson.firstName
  }'s BMI (${firstPerson.calcBmi()}) is higher than ${
    secondPerson.firstName
  }'s (${secondPerson.calcBmi()})!`;
};

if (markInfo.calcBmi() > johnInfo.calcBmi()) {
  // console.log( comparingBmi(markInfo, johnInfo));
  comparingBmi(markInfo, johnInfo);
} else {
  // console.log(comparingBmi(johnInfo, markInfo));
  comparingBmi(johnInfo, markInfo);
}

// ===> Loop

for (let i = 1; i <= 10; i++) {
  // console.log(`Do ${i} reps`);
}

const years2 = [1000, 1880, 1780, 2050];
const ages = [];

for (let i = 0; i < years2.length; i++) {
  ages.push(2037 - years2[i]);
}
// console.log(ages);

// ---> Continue and break

const mobsInfo = ['Mob', 'mobson', 1980, ['Rob', 'Mob', 'Chop']];

// console.log('---Only strings---');
for (let i = 0; i < mobsInfo.length; i++) {
  if (typeof mobsInfo[i] !== 'string') continue;
  // console.log(mobsInfo[i]);
}

// console.log('---break with number---');
for (let i = 0; i < mobsInfo.length; i++) {
  if (typeof mobsInfo[i] === 'number') break;
  // console.log(mobsInfo[i]);
}

// Reverese loop
for (let i = mobsInfo.length - 1; i >= 0; i--) {
  // console.log(mobsInfo[i]);
}

// Iterate massive inside masive
for (let exercise = 1; exercise < 3; exercise++) {
  // console.log(`---- Some exercise ${exercise}`);
  for (let reps = 1; reps < 5; reps++) {
    // console.log(`do ${reps} reps`);
  }
}

// ---> While

for (let i = 1; i <= 10; i++) {
  // console.log(`Do ${i} reps`);
}

let i = 1;
while (i <= 10) {
  // console.log(`Do ${i} reps`);
  i++;
}

// Challenge 8

const steveBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const steveTips = [];
const steveTotal = [];

for (let i = 0; i < steveBills.length; i++) {
  let tip = calcTip(steveBills[i]);
  steveTips.push(tip);
  steveTotal.push(tip + steveBills[i]);
}

function calcSteveAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// console.log(steveTips, steveTotal);
// console.log(calcSteveAverage(steveTotal));
