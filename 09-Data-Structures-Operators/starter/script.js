'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays1 = ['mon', 'tue', 'wed'];

const openingHours = {
  [weekdays1[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced obj literals methods

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngred, ...otherIngred) {
    console.log(mainIngred, otherIngred);
  },

  // ES6 enhanced obj literals
  // openingHours: openingHours,
  openingHours,
};

// ===> Destructuring

const arr = [0, 1, 2];

const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
const [first, , second] = restaurant.categories; // first and third elem
// console.log(first, second);

// --> Switching variables
let [mainCat, secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;

[mainCat, secondary] = [secondary, mainCat];
// console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// -> Nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// -> Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// ===> Destructuring Objects

const { name, openingHours: openingHours2, categories } = restaurant;
// console.log(openingHours2);
// --> Rename variables
const {
  name: restrauntName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(name, restrauntName);

// --> Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu);

// --> Mutating vars
let a = 111;
let b = 1231;
const objNums = { a: 23, b: 4, c: 1 };
({ a, b } = objNums);
// console.log(a, b);

// --> Nested obj
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

// ===> Spread operator
const arr1 = [6, 8, 9];
// const badNewArr = [1,3, arr1[0], arr1[1]]
const newArr = [1, 2, ...arr];

// Copy aray
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const menuJoined = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuJoined);

// iterables: arrays, strings, maps, sets. Not objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
// console.log(letters);

// Spread only in arrays anf

// Example
const ingreds = [
  // prompt('let`s make a pasta! Ingredient 1 '),
  // prompt('let`s make a pasta! Ingredient 2'),
  // prompt('let`s make a pasta! Ingredient 3 '),
];

// restaurant.orderPasta(...ingreds);

// -> Objects
const newRestraunt = { ...restaurant.openingHours, founedr: '' };

// Copy objects
const restrauntCopy = { ...restaurant };

// ====> Rest operator

// SPREAD, because on RIGHT side of =
const arr5 = [1, 2, 3, ...[5, 6]];

// REST, because on LEFT side =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];

//  --> 1) Destructuring
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Objects rest
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//  --> 2) Functions
const add = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  // console.log(args, sum);
};

add(2, 3);

// restaurant.orderPizza('mushrooms', 'onion', 'olived');

// ====> Short Circuiting (&& ||)

// OR - ||
// Use ANY data type, return ANY data type, short-circuting
// Return first truthy value

// console.log(3 || 'Bob'); // -> 3
// console.log(undefined || 0 || '' || 'hello'); // -> hello

const guests1 = restaurant.numGuests || 10; // ->  10, like defult value

// AND - &&
// Find and return first falsy value

// console.log(0 && 'Bob'); // -> 0

// Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ===> Nullish coalescing Operator (??)
//  Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//  ====> Logical Assignments operators

const rest1 = {
  name: 'Roberto',
  numGuests: 0,
};

const rest2 = {
  name: 'Prima',
  owner: 'Mario',
};

//  ---> OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// Don`t work with falsy  values (example), so return not 0, but 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Solve this problem by nulish operator (??)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// ---> AND assignment operator
rest1.owner &&= 'Anonymous'; //falsy - nothing changed
rest2.owner &&= 'Anonymous'; //truthy - owner exist
// console.log(rest1, rest2);

// ======> looping Arrays: For-of

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) {
  // console.log(item);
}

for (const [i, el] of menu2.entries()) {
  // console.log(i, el);
}

// =====> Enhanced object literals

// ====> Optional Chaining
// prevent error in console

// console.log(restaurant.openingHours.sun?.open);

// -> exapmle
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, open at ${open}`);
}

// ======> Looping objects: object Keys, Values and Entries

// -> property NAMES

const properties = Object.keys(openingHours2);
// console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);

// --> Property VALUES
const values = Object.values(openingHours2);
// console.log(values);

// --> Entire OBJECT
const entries = Object.entries(openingHours2);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(`on ${key} we open at ${open} and close at ${close}`);
}

//  ======> Data Structure: Set

// ---> Set - collection of a unique values
// Set is not array, but iterable, does not have indexes
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta']);
// console.log(orderSet);

// console.log(new Set('jonas'));

// console.log(orderSet.size); // how musch uvique values
// console.log(orderSet.has('Pizza')); // check if exist

// Add
orderSet.add('Garlic Bread');
// console.log(orderSet);

// Delete
orderSet.delete('Garlic Bread');
// console.log(orderSet);

// Delete all values
orderSet.clear();
// console.log(orderSet);

// Loop Set
// for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// =====> Data structure: Map
// -----> Map: Fundamentals
// Can map values to keys. Data is stored in key value pairs in maps
// The keys in map can have any type. * in objects keys are always string

const restMap = new Map();
restMap.set('name', 'Italiano');
restMap.set(1, 'italy');
restMap.set(2, 'lisbon');
restMap
  .set('categories', ['Italian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'Weare closed');

// console.log(restMap.get('name'));
// console.log(restMap.get(true));

const time = 21;
// console.log(
//   restMap.get(time > restMap.get('open') && time < restMap.get('close'))
// );

// console.log(restMap.has('categories'));
restMap.delete(2);
// console.log(restMap.size);
// console.log(restMap.clear());

restMap.set([1, 2], 'Test');
// console.log(restMap.get([1, 2])); // undefined because of defferent objects

// -----> Map: Iterations
const question = new Map([
  ['question', 'the best programming language? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [true, 'Correct'],
  [false, 'try again'],
  ['correct', 3],
]);

// quizz app
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(question.get(answer === question.get('correct')));

// ----> Convert map to array
// console.log([...question]);
// console.log(typeof [...question.keys()][2]);

// =====> Work with strings - Part 1

const airline = 'TAP Air Port';
const plane = 'A320';

// Get letter
// console.log(plane[0]);
// console.log('B737'[0]);

// // length
// console.log(plane.length);

// // Index
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));

// // Slice
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// // Extract first word
// console.log(airline.slice(0, airline.indexOf(' ')));
// // Extract last word
// console.log(airline.slice(airline.indexOf(' ') + 1));

// // Extract letters from end
// console.log(airline.slice(-2));

// // Extract string without letter
// console.log(airline.slice(1, -1));

function checkMiddleSeats(seat) {
  const s = seat.slice(-1);
  // if (s === 'B' || s === 'E') console.log('Middle seat');
  // else console.log('((((');
}

checkMiddleSeats('11B');
checkMiddleSeats('22E');
checkMiddleSeats('3C');

//  Boxing -> create object wrapper String and convert to primitive String
// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// =====> Work with strings - Part 2

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';

const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
// console.log(passengerCorrect);

// Comparing emails
const emailPass = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.IO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Replace
const priceGB = '288,97*';
const priceUS = priceGB.replace('*', '$').replace(',', '.');
// console.log(priceUS);

const announcement = 'Door left and door right';
// replaceAll -> replace all words
// console.log(announcement.toLowerCase().replaceAll('door', 'gate'));
// with regular expression
// console.log(announcement.toLowerCase().replace(/door/g, 'gate'));

// Booleans: includes, strartsWith, endsWith

const plane2 = 'Airplane A320';
// console.log(plane2.includes('A320'));
// console.log(plane2.startsWith('Air'));
// console.log(plane2.endsWith('460'));

// Practise exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    // console.log('no allowed');
  } else {
    // console.log('allowed, welcome');
  }
};

checkBaggage('food, personal Knife, food');
checkBaggage('clothes, soap');
checkBaggage('snacks, gun');

// =====> Work with strings - Part 3

// Split - create array of string
// console.log('a+very+nice+str'.split('+'));

// Split + Join
const [firstName, lastName] = 'Jonas Shtented'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitalizeName = userName => {
  const names = userName.split(' ');
  const namesUpper = [];

  for (const name of names) {
    // namesUpper.push(name[0].toUpperCase() + name.slice(1));
    namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }

  // console.log(namesUpper.join(' '));
};

capitalizeName('jess rob bob crob');

// Padding
const mes = 'Go to gate 32!';
// console.log(mes.padStart(25, '+').padEnd(35, '+'));
// console.log('lof'.padStart(25, '+'));
// console.log('lof'.padEnd(25, '+'));

// Real Example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard(456789132456798));

// Repeat
const mes2 = 'bad weather ... All departues delayeed...';
// console.log(mes2.repeat(5));

////////////////////////////////////////////////////////////////
// TASKS

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Destructuring Arrays
// 1.1
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring Objects

// 2.1
const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2
const { tags: keywords } = books[0];
// console.log(tags);

// 2.3
const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 2.6
const printBookInfo = ({ title, author, year = 'unknown' }) => {
  // console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// 3.1

const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// 3.2

const spellWord = string => {
  console.log(...string);
};

// spellWord('JavaScript');

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 4.3
const printBookAuthorsCount = (title, ...authors) => {
  // console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1
const hasExamplesInJava = book => {
  return book.hasExampleInJava === 'Java' || 'no data available';
};

hasExamplesInJava(books[0]);

// 5.2
for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent &&
  //   console.log(`${books[i].title} provides online content`);
}

// 6.1
for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent ??
  //   console.log(
  //     `"${books[i].title}" provides no data about its online content`
  //   );
}

// 7.1

// console.log(books.map(el => (el.edition ||= 1)));
// books.forEach(el => console.log((el.edition ||= 1)));

for (let i = 0; i < books.length; i++) {
  const element = books[i];
  element.edition ||= 1;
  // console.log(element.edition);
}

// 7.2
for (let i = 0; i < books.length; i++) {
  const element = books[i];
  element.thirdParty.goodreads.rating &&= !(
    element.thirdParty.goodreads.rating < 4.2
  );
}

// ======> challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
// Simple
// game.players1 = [...game.players[0]];
// game.players2 = [...game.players[1]];

// With functions
// const addTeamPlayers = (name, players) => (game[name] = [...players]);
// game.players.map((el, i) => addTeamPlayers(`players${i + 1}`, ...game.players));

const [players1, players2] = game.players;

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, ...players] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players[0], ...players[1]];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Based on the game.odds object, create one variable for each odd (called
//   'team1', 'draw' and 'team2')
const {
  odds: { team1, draw, team2 },
} = game;

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

const printGoals = (...goalPlayers) => {
  // console.log(goalPlayers);
  // console.log(`${goalPlayers.length} - total score`);
};
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator

// console.log(team1 < team2 && console.log('more likely to win'));
// console.log(team1 > team2 && console.log('more likely to win'));

// console.log(game);

// 8.1
let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}

// console.log(pageSum);

// 8.2

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
// console.log(allAuthors);

// 8.3
for (const [i, el] of allAuthors.entries()) {
  // console.log(`${i}. ${el}`);
}

// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

// console.log(newBook);

// 9.2

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

// 10.1
const getFirstKeyword = book => {
  return book.keywords?.[0];
};

// console.log(getFirstKeyword(books[0]));

// 11.1
const entries1 = [];
const goodreads = books[0].thirdParty.goodreads;
for (const goodreadsKey of Object.keys(goodreads)) {
  entries1.push([goodreadsKey]);
}

// 11.2

for (const [index, value] of Object.values(goodreads).entries()) {
  entries1[index].push(value);
}

// 11.3

const entries2 = Object.entries(goodreads);

// 11.4

// console.log(entries1);
// console.log(entries2);

// ====> Challenge 2

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, player] of game.scored.entries()) {
  // console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
//   studied how to calculate averages, you can go check if you don't remember)

let average = 0;
const oddsArr = Object.values(game.odds);
for (const value of oddsArr) {
  average += value;
}

// console.log(average / oddsArr.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names

for (const [index, odd] of Object.entries(game.odds)) {
  // console.log(
  //   game[index]
  //     ? `Odd of victory ${game[index]}: ${odd}`
  //     : `Odd of draw: ${odd}`
  // );
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value

const scorers = {};
const scoreValues = Object.values(game.scored);

for (const player of scoreValues) {
  scorers[player] = (scorers[player] || 0) + 1;
}

// console.log(scorers);

// 12.1
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

// 12.2
const uniqueKeywords = new Set(allKeywords);

// 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

// 12.4
uniqueKeywords.delete('business');

// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];

// 12.6
uniqueKeywords.clear();
// console.log(uniqueKeywordsArr);

// 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// 13.2
bookMap.set('pages', 464);
// console.log(bookMap);

// 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 13.4
// console.log(bookMap.size);

// 13.5
// console.log(bookMap.has('author') && 'The author of the book is known');

// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// 14.2
for (const [key, value] of firstBookMap) {
  // if (typeof value === 'number') console.log(key);
}

// =====> Challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);

// 3.
const time1 = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time1 / gameEvents.size} minutes`
// );

// console.log(time1);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  // console.log(`[${half} Half] ${min}: ${event}`);
}

// 15.1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// 15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4
const isContributor = name => {
  // const contributor1 = name.slice(name.lastIndexOf(' ') + 1);
  // if (contributor1 === '(Contributor)') return true;

  const contributor = '(Contributor)';
  return name.includes(contributor);
};

// console.log(isContributor('Julie Sussman (Contributor)'));

// 16.1
const normalizeAuthorName = name => {
  const trimmedLowerName = name.trim().toLowerCase();
  const authorName = trimmedLowerName.replace(
    trimmedLowerName.slice(trimmedLowerName.lastIndexOf(' ')),
    ''
  );

  let firstName = authorName.slice(0, authorName.indexOf(' '));
  let secondname = authorName.slice(authorName.lastIndexOf(' ') + 1);

  const firstNameCapitilize =
    firstName[0].toUpperCase() + firstName.slice(1, firstName.length);

  const secondNameCapitilize =
    secondname[0].toUpperCase() + secondname.slice(1, secondname.length);

  // 2
  // const creds = authorName
  //   .split(' ')
  //   .map(cred => cred[0].toUpperCase() + cred.slice(1, cred.length))
  //   .join(' ');

  return `${firstNameCapitilize} ${secondNameCapitilize}`;
};

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);

// 16.3
const logBookTheme = title => {
  const titleLower = title.toLowerCase();
  switch (titleLower) {
    case titleLower.strartWith('computer'):
      console.log('This book is about computers');
      break;

    case titleLower.includes('algorithms') && titleLower.includes('structures'):
      console.log('This book is about algorithms and data structures');
      break;
    case (titleLower.endsWith('system') || titleLower.endsWith('systems')) &&
      !titleLower.includes('operating'):
      console.log(
        'This book is about some systems, but definitely not about operating systems'
      );
      break;
    default:
      console.log('hello');
      break;
  }
};

// 17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = bookCategories => {
  const categories = bookCategories.split(';');
  // console.log(categories.join('\n'));
};

logBookCategories(bookCategories);

// 17.2

const getKeywordsAsString = books => {
  const allBooksKeywords = [];

  for (const book of books) {
    allBooksKeywords.push(...book.keywords);
  }

  const uniqueKeywordsStr = [...new Set(allBooksKeywords)].join(';');

  console.log(uniqueKeywordsStr);
};

getKeywordsAsString(books);

// 17.3

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

function logBookChapters(bookChapters) {
  for (const [chapter, page] of bookChapters) {
    // console.log(`${chapter.padEnd(25, '_')} ${page}`);
  }
}

logBookChapters(bookChapters);
