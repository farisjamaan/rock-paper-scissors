const buttons = document.querySelectorAll('.btns');
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        playRound(event.target.innerHTML);
    })
})

const round_selection = document.querySelector(".round_selection");
const match_results = document.querySelector(".match_results");
const scores = document.querySelector(".scores");


// Function for the computer choice
function compSelection () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const output = Math.floor(Math.random() * choices.length);
    return choices[output];
}

playerCounter = 0;
computerCounter = 0;


// Function for a game round
function playRound (selection) {
    const playerSelection = selection
    const computerSelection = compSelection();

    round_selection.textContent = `You Selected ${playerSelection} while Computer Selected ${computerSelection}`;
    if (playerSelection === computerSelection) {
        match_results.textContent = "It's a TIE";
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        match_results.textContent = 'Computer Wins';
        computerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        match_results.textContent = 'You WON';
        playerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        match_results.textContent = 'You WON';
        playerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        match_results.textContent = 'Computer Wins';
        computerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        match_results.textContent = 'Computer Wins';
        computerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        match_results.textContent = 'You WON';
        playerCounter++
        scores.textContent = `You: ${playerCounter}
        Computer: ${computerCounter}`;
    }
}

