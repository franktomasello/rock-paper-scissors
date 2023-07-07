const ROCK_PAPER_SCISSORS = ["rock", "scissors", "paper"];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length);
  return ROCK_PAPER_SCISSORS[randomIndex];
}

function getRoundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  return winConditions[playerSelection] === computerSelection ? "You win!" : "You lose!";
}

function updateScores(result, playerScore, computerScore) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }
  return [playerScore, computerScore];
}

function checkGameEnd(playerScore, computerScore) {
  if (playerScore === 5) {
    return "Player wins the game!";
  } else if (computerScore === 5) {
    return "Computer wins the game!";
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('button');
  const resultsDiv = document.querySelector('#results');
  const playerScoreDiv = document.querySelector('#playerScore');
  const computerScoreDiv = document.querySelector('#computerScore');
  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      const playerSelection = button.innerText.toLowerCase();
      const computerSelection = getRandomChoice();
      const result = getRoundResult(playerSelection, computerSelection);
      [playerScore, computerScore] = updateScores(result, playerScore, computerScore);

      // Update the score displays
      playerScoreDiv.innerText = "Player Score: " + playerScore;
      computerScoreDiv.innerText = "Computer Score: " + computerScore;
      
      const gameEndMessage = checkGameEnd(playerScore, computerScore);
      if (gameEndMessage) {
        resultsDiv.innerText = gameEndMessage;
        playerScore = 0;
        computerScore = 0;
      } else {
        resultsDiv.innerText = result;
      }
    });
  });
});





