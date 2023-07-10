let playerCounter = 0;
let computerCounter = 0;

const round_selection = document.querySelector(".round_selection");
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


// winner function
function winner () {
    if (playerCounter === 5) {
        return 'You'
    } else if (computerCounter === 5) {
        return 'The Computer'
    }
}

// Game over function 
function gameOver () {
    if (playerCounter === 5 || computerCounter === 5) {
        match_results.textContent = `Game Over! The winner is ${winner()}`;
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

    round_selection.textContent = `You Selected ${playerSelection} while Computer Selected ${computerSelection}`;
    if (playerSelection === computerSelection) {
        round_results.textContent = "It's a TIE";
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        round_results.textContent = 'Computer Won this Round';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        round_results.textContent = 'You WON this Round';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        round_results.textContent = 'You WON this Round';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        round_results.textContent = 'Computer Won this Round';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        round_results.textContent = 'Computer Won this Round';
        computerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        round_results.textContent = 'You WON this Round';
        playerCounter++;
        scores.textContent = `You: ${playerCounter} Computer: ${computerCounter}`;
    }
}


