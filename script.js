function getComputerChoice() {
    // declaring an array literal
    const rockPaperScissors = [];
  
    // pushing the elements to the array
    rockPaperScissors.push("Rock");
    rockPaperScissors.push("Scissors");
    rockPaperScissors.push("Paper");
  
    // pick a random index
    const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
    // choose a random element from the array
    const randomElement = rockPaperScissors[randomIndex];
  
    // return the randomized element from the array
    return randomElement;
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

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playARound(playerSelection, computerSelection));
  

function game() {
    let playerWins = 0;     // Counter for player wins
    let computerWins = 0;   // Counter for computer wins
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, Paper, or Scissors?");
      const computerSelection = getComputerChoice();
      const result = playARound(playerSelection, computerSelection);
      alert(result);
      
      // Increment the corresponding counter based on the result
      if (result === "You win!") {
        playerWins++;
      } else if (result === "You lose!") {
        computerWins++;
      }
  
      // Display the number of computer wins and player wins after each round
      alert("Player wins: " + playerWins + "\nComputer wins: " + computerWins);
    }
  
    // Display the winner of the game
    if (playerWins > computerWins) {
      alert("Player wins the game!");
    } else if (computerWins > playerWins) {
      alert("Computer wins the game!");
    } else {
      alert("It's a tie! No clear winner.");
    }
  }
  
  

console.log(game());