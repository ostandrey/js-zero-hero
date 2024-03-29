'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngred, ...otherIngred) {
    console.log(mainIngred, otherIngred);
  },

  openingHours: {
    thu: {
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
  },
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

const { name, openingHours, categories } = restaurant;

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
  console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');