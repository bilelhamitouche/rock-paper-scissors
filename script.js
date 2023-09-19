
// initializing prompt
const prompt = require('prompt-sync')();

// computer choice
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random(options.length) * (options.length))];
}

// 1 round of the game
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
	return `You tied ${player} == ${computer}`;
    } else if (player == "paper" && computer == "rock" || player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper") {
	return `You win ${player} beats ${computer}`;
    } else {
	return `You lost ${computer} beats ${player}`;
    }
}


// 5 rounds of the game 
function game() {
    let score = 0;
    let computerScore = 0;
    let choice;
    let round;
    for (i = 0; i < 5; i++) {
	choice = prompt("Choose your weapon: ");
	round = playRound(choice, getComputerChoice());
	if (round.includes('You win')) {
	    score++;
	} else if (round.includes('You lost')){
	    computerScore++;
	} else {
	}
	console.log(round);
	console.log(`Score is: ${score}: ${computerScore}`);
    }

    if (score > computerScore) {
	console.log("Winner");
    } else if (score < computerScore) {
	console.log("Loser");
    } else {
	console.log("Tied");
    }

}

// 5 rounds of rock paper scissors 
game();
