function getComputerChoice() {
  // Declaring an array literal
  const rockPaperScissors = ["Rock", "Scissors", "Paper"];

  // Pick a random index
  const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);

  // Return the randomized element from the array
  return rockPaperScissors[randomIndex];
}

function playARound(playerSelection, computerSelection) {
  // Convert both selections to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Check for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Check for player win conditions
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return "You win!";
  }

  // If none of the above conditions are met, the player loses
  return "You lose!";
}

document.addEventListener("DOMContentLoaded", function(){
  // Select all buttons
  let buttons = document.querySelectorAll('button');

  // Select results div
  let resultsDiv = document.querySelector('#results');

  // Select score divs
  let playerScoreDiv = document.querySelector('#playerScore');
  let computerScoreDiv = document.querySelector('#computerScore');

  // Initialize scores
  let playerScore = 0;
  let computerScore = 0;

  // Add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      // Get playerSelection from button text
      let playerSelection = button.innerText;
      let computerSelection = getComputerChoice();

      // Run playARound function with playerSelection and computerSelection
      let result = playARound(playerSelection, computerSelection);

      // Update scores based on the result
      if (result === "You win!") {
        playerScore++;
      } else if (result === "You lose!") {
        computerScore++;
      }

      // Display result in the results div
      resultsDiv.innerText = result;

      // Display scores
      playerScoreDiv.innerText = "Player Score: " + playerScore;
      computerScoreDiv.innerText = "Computer Score: " + computerScore;

      // Check if either score has reached 5 and display winner
      if (playerScore === 5) {
        resultsDiv.innerText += "\nPlayer wins the game!";
      } else if (computerScore === 5) {
        resultsDiv.innerText += "\nComputer wins the game!";
      }
    });
  });
});

