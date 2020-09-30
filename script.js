let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(userGuess, botGuess, secretNumber) {
  let userDelta = Math.abs(secretNumber - userGuess);
  let botDelta = Math.abs(secretNumber - botGuess);
  if (userDelta <= botDelta) {
    return true; //human wins
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore ++;
  } else {
    computerScore ++;
  }
}

function advanceRound() {
  currentRoundNumber ++;
}
