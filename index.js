let playerCounter = 0;
let computerCounter = 0;

const round_results = document.querySelector(".round_results");
const scores = document.querySelector(".scores");
const match_results = document.querySelector(".match_results");

const buttons = document.querySelectorAll('.btns');
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        playRound(event.target.innerHTML);
        gameOver();
        console.log(`player is ${playerCounter} computer is ${computerCounter}`);
    })
})


// Game over function 
function gameOver () {
    if (playerCounter === 5) {
        match_results.textContent = `Congratualtions! You Won the game`;
        playerCounter = 0;
        computerCounter = 0;
    } else if (computerCounter === 5) {
        match_results.textContent = `Tough Luck! The Computer won this game.`;
        playerCounter = 0;
        computerCounter = 0;       
    }
}

// Function for the computer choice
function compSelection () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const output = Math.floor(Math.random() * choices.length);
    return choices[output];
}

// Function for a game round
function playRound (selection) {
    match_results.textContent = '';
    const playerSelection = selection
    const computerSelection = compSelection();

    if (playerSelection === computerSelection) {
        round_results.textContent = "It's a TIE!";
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        round_results.textContent = 'You lost! Paper beats Rock';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        round_results.textContent = 'You WON! Rock beats Scissors';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        round_results.textContent = 'You WON! Paper beats Rock';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        round_results.textContent = 'You Lost! Scissors beats Paper';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        round_results.textContent = 'You lost! Rock beats Scissors';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        round_results.textContent = 'You WON! Scissors beats Paper';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    }
}


