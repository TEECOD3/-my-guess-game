'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// function for message output
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);

  if (!guess) {
    displayMessage('No guess inputed');
  } else if (guess === secretNumber) {
    displayMessage('correct guess✅');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // if number is incorrect
  else if (guess !== secretNumber) {
    // given the score is greater than 1
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'toohigh' : 'toolow');
      score--;
      // console.log(score);
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('gameover❌');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
  });
});
