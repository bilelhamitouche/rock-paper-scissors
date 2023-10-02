
// computer choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random(options.length) * (options.length))];
}

// results
const score = document.querySelector('.score');
score.textContent = 'Score: 0 - 0';

const results = document.querySelector('.results');
results.textContent = '';


let playerScore = 0;
let computerScore = 0;
// 1 round of the game
function playRound(playerSelection, computerSelection) {
    let result = '';
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player == computer) {
	result = `You tied! ${playerSelection} == ${computerSelection}`;
    } else if (player == "paper" && computer == "rock" || player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper") {
	playerScore++;
	result = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
	computerScore++;
	result = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
    results.textContent = result;
    score.textContent = `Score: ${playerScore} - ${computerScore}`

    if (playerScore === 5) {
	results.textContent = 'Winner: Player';
	score.textContent = '';
    } else if (computerScore === 5) {
	results.textContent = 'Winner: Computer';
	score.textContent = '';
    }
}

// Buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});
