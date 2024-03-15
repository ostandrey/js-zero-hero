'use strict';

const totalScoreFirst = document.querySelector('#score--0');
const totalScoreSecond = document.querySelector('#score--1');
const currentScoreFirst = document.querySelector('#current--0');
const currentScoreSecond = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const playerFirst = document.querySelector('.player--0');
const playerSecond = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

// Start a neew game
const initGame = () => {
  // Starting coditions

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScoreFirst.textContent = 0;
  currentScoreSecond.textContent = 0;
  totalScoreFirst.textContent = 0;
  totalScoreSecond.textContent = 0;

  playerFirst.classList.remove('player--winner');
  playerSecond.classList.remove('player--winner');
  playerFirst.classList.add('player--active');
  playerSecond.classList.remove('player--active');
  dice.classList.add('hidden');
};

initGame();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerFirst.classList.toggle('player--active');
  playerSecond.classList.toggle('player--active');
};

// Rolling dice functionality
const rollDice = () => {
  if (playing) {
    // 1. Generate random dice roll
    let randomNumber = Math.round(Math.random() * 5) + 1;

    // 2. Display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    // 3. Check for rolled 1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // summCurrentScore(randomNumber);
    } else {
      switchPlayer();
    }
  }
  // summCurrentScore(0);
  // if (playerFirst.classList.contains('player--active')) {
  //   playerSecond.classList.add('player--active');
  //   playerFirst.classList.remove('player--active');
  // } else {
  //   playerSecond.classList.remove('player--active');
  //   playerFirst.classList.add('player--active');
  // }
};

// Summ score functionality
// const summCurrentScore = score => {
//   score === 0 ? (currentScore = 0) : (currentScore += score);
//   playerFirst.classList.contains('player--active')
//     ? (currentScoreFirst.textContent = currentScore)
//     : (currentScoreSecond.textContent = currentScore);
//   return currentScore;
// };

// Hold score
const holdCurrentScore = () => {
  if (playing) {
    //  1. Add current score to active player`s score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }

  // if (playerFirst.classList.contains('player--active')) {
  //   totalScoreFirst.textContent =
  //     Number(totalScoreFirst.textContent) + currentScore;
  //   currentScoreFirst.textContent = currentScore;
  //   playerSecond.classList.add('player--active');
  //   playerFirst.classList.remove('player--active');
  // } else {
  //   totalScoreSecond.textContent =
  //     Number(totalScoreSecond.textContent) + currentScore;
  //   currentScoreSecond.textContent = currentScore;
  //   playerSecond.classList.remove('player--active');
  //   playerFirst.classList.add('player--active');
  // }

  // currentScore = 0;

  // if (
  //   Number(totalScoreFirst.textContent) === 100 ||
  //   Number(totalScoreSecond.textContent) === 100
  // ) {
  //   setNewGame();
  // }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdCurrentScore);
btnNewGame.addEventListener('click', initGame);
