function getComputerChoice() {
    //declaring an array literal
    const rockPaperScissors = [];

    //pushing the elements to the array
    rockPaperScissors.push("Rock");
    rockPaperScissors.push("Scissors");
    rockPaperScissors.push("Paper");

    //pick a random index
    const randomIndex = Math.floor(Math.random() * rockPaperScissors.length);
    //choose a random element from the array
    const randomElement = rockPaperScissors[randomIndex];

    //return the randomized element from the array
    return randomElement;
}

console.log(getComputerChoice());

