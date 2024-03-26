let country = 'US';
let cotinent = 'America';
let population = 148;

let language = 'english';
language = 'french';
let isIsland = false;

const firstName = 'bob';
// firstName = 'chop';
population++;
// console.log(population);

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const BMI = (mass, height) => (mass / height ** 2).toFixed(1);

let markBmi = BMI(markMass, markHeight);
let johnBmi = BMI(johnMass, johnHeight);

let markHigherBMI = markBmi > johnBmi;

// markHigherBMI
//   ? console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
//   : console.log(
//       `John's BMI (${johnBmi}) is higher than Mark's  (${markBmi}) !`
//     );

// console.log('9' - '5'); // -> ?
// console.log(1 - '1'); // -> ?
// console.log('19' - '13' + '17'); // -> ?
// console.log('19' - '13' + 17); // -> ?
// console.log('123' < 57); // -> ?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

const calcAverageScore = (...val) => {
  let summScore = 0;
  val.forEach((score) => {
    summScore += score;
  });

  return summScore / 3;
};

let dolphinsScore = calcAverageScore(97, 112, 101);
let koalasScore = calcAverageScore(109, 95, 106);

// if (dolphinsScore === koalasScore && (dolphinsScore, koalasScore) > 100) {
//   console.log('draw');
// } else if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log(`dolphins winner! ${dolphinsScore}`);
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log(`koalas winner! ${koalasScore}`);
// } else {
//   console.log('no one wins');
// }

// ====> Switch

// const day = 'monday';

// switch (day) {
//   case 'monday':
//     console.log('good monday');
//     break;
//   case 'tuesday':
//   case 'wednesday':
//     console.log('greetings');
//     break;
//   default:
//     console.log('bye');
// }

// ===> Challenge 4

let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
