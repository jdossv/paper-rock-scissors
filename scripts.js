let computerScore = 0;
let playerScore = 0;
let tie = 0;

function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    let randomSelection = Math.floor(Math.random() * pick.length);
    return pick[randomSelection];
}


function getPlayerChoice() {
    const pick = prompt("Write your option").toLowerCase();
    return pick;
}


function playRound(computerSelection, playerSelection) {
    const computerChoice = computerSelection;
    const playerChoice = playerSelection;

    if(playerChoice === computerChoice) {
        tie++;
        return `It's a tie between ${playerChoice} and ${computerChoice}`;
    } else if(
            (playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "scissors" && computerChoice == "paper") ||
            (playerChoice == "paper" && computerChoice == "rock")
            ) 
    {
        playerScore++;
        return `You won the round ${playerChoice} beats ${computerChoice} -> Player Score: ${playerScore}`
        
    } else {
        computerScore++;
        return `You lose the round ${computerChoice} beats ${playerChoice} -> Computer Score: ${computerScore}`;
    }
}

function game() {


    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }

console.log("----------- Print Scores -----------");
console.log(`Tie: ${tie}`);
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);

    if(playerScore === computerScore){
        return console.log(`Tie!! total result is: ${playerScore} vs ${tie}`);
    } else if(playerScore > computerScore) {
        return console.log(`You win! you defeated the computer, total result is: ${playerScore} vs ${computerScore}`);
    } else if(computerScore > playerScore ) {
        return console.log(`You have lost! The computer has defeated you, total result is: ${computerScore} vs ${playerScore}`);  
    }

}

game();