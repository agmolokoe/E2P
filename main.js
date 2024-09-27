// Define choices for the game
const choices = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";
let resultText = document.getElementById("result-text");
let playAgainButton = document.getElementById("play-again");

// Add event listeners for the player's choice
document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
});
document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
});

// Main game logic
function playGame(playerChoice) {
    // Get random choice for the computer
    computerChoice = getRandomChoice();

    // Determine the winner
    let result = determineWinner(playerChoice, computerChoice);

    // Display the result and computer's choice
    resultText.innerHTML = `You chose <b>${playerChoice}</b>, Computer chose <b>${computerChoice}</b>. <br>${result}`;
    
    // Show the "Play Again" button
    playAgainButton.style.display = "block";

    // Add event listener to reset the game when clicking "Play Again"
    playAgainButton.addEventListener("click", resetGame);
}

// Randomly select a choice for the computer
function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner of the game
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Reset the game for the next round
function resetGame() {
    // Clear the result text
    resultText.innerHTML = "";

    // Hide the "Play Again" button
    playAgainButton.style.display = "none";
}
	