// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp;
// - How to compute max and min temp?
// - What`s a sensor error?  And what to do?

// 2) Breaking up into sub-problems
//  - How to ignore errors ?
//  - Find max value in temp array
//  - Find min value in temp array
//  - Subsctract min from max and return it

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO, just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, [0, -20, 13]);
// console.log(amplitudeNew);

// ===> Debugging
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unite: 'celsius',
    // C) Fix
    value: Number(prompt('degrees celsius: ')),
  };

  // B) Find
  // console.table(measurement);

  // console.log(measurement);
  // console.warn(measurement);
  // console.error(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify
// console.log(measureKelvin());
10;

// ===> Challenge 1

// 1) Understanding the problem
// - How to create a string with max temp and counting days?
// - Return one sting or several?
// - Array transformed to string, separated by ...
// - What is the X dayss? -> index + 1

// 2) Breaking up into sub-problems
//  - Create a function that will loop array
//  - Get the parameter of array
//  - Create loop array to transform into a string
//  - Add for every value additional string which consists counting days+
//  - Counting days -> index + 1
//  - Return to console

const printForecast = (temps) => {
  let forecastStr = '';

  for (let i = 0; i < temps.length; i++) {
    forecastStr += `${temps[i]}C in ${i + 1} days ... `;
  }
  console.log(`... ${forecastStr}`);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
