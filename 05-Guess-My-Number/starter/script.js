'use strict';

const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const btnAgain = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const scoreVal = document.querySelector('.score');
const highscoreVal = document.querySelector('.highscore');

const createRandomNumber = () => Math.round(Math.random() * 20);

const displayMessage = text => (message.textContent = text);

const decreaseScore = score => (score -= 1);

let numberVal = createRandomNumber();
let score = Number(scoreVal.textContent);
let highscore = Number(highscoreVal.textContent);

btnCheck.addEventListener('click', () => {
  score--;
  scoreVal.textContent = score;

  if (score === 0) {
    displayMessage('You lose...😔');
    btnCheck.disabled = true;
    return;
  }

  if (!inputGuess.value && inputGuess.value !== 0) {
    displayMessage('Please write a number...🙄');
  } else if (Number(inputGuess.value) === numberVal) {
    displayMessage('Wow, you are right 🎉');
    body.style.backgroundColor = '#60b347';
    btnCheck.disabled = true;
    number.textContent = numberVal;
    if (score > highscore) {
      highscoreVal.textContent = score;
    }
  } else {
    Number(inputGuess.value) > numberVal
      ? displayMessage('Too high 🚀')
      : displayMessage('Too low 🤏');
  }
});

btnAgain.addEventListener('click', () => {
  numberVal = createRandomNumber();
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  inputGuess.value = '';
  scoreVal.textContent = '20';
  score = scoreVal.textContent;
  btnCheck.disabled = false;
});
