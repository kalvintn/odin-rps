// Note: In JavaScript, function declarations (including the body) are hoisted

// Game Variables
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let resultBox = document.querySelector(".result");






/* Generate a computer rps */
function getComputerChoice(){
    // For integer ranges: Math.floor(Math.random() * (max - min) + min);
    // Not that min is inclusive and max is exclusive
    // Possible Values: 0, 1, or 2
    let randomInt = Math.floor(Math.random() * 3);

    // rock=0, paper=1, scissor=2
    if (randomInt == 0) return "rock";
    else if (randomInt == 1) return "paper";
    else return "scissors";
}





/* Receives human answer from button event listener */
function getHumanChoice(humanChoice){
    // standardize output
    humanChoice = humanChoice.toLowerCase();
    humanSelection =  humanChoice;
}





/* Play Round : Compare human & computer results, dole points. */
function playRound(humanChoice){
    let computerChoice = getComputerChoice();

    // Case such that a tie occurs
    if(humanChoice === computerChoice){
        resultBox.innerHTML += `tie! ${humanChoice} meets ${computerChoice}.<br>`;
        console.log(resultBox);
    }
    // case such that player wins
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {   resultBox.innerHTML += `You win! ${humanChoice} beats ${computerChoice}.<br>`;
        humanScore++;
    }
    // case such that computer wins
     else if(computerChoice == "rock" && humanChoice == "scissors" ||
            computerChoice == "scissors" && humanChoice == "paper" ||
            computerChoice == "paper" && humanChoice == "rock")
    {   resultBox.innerHTML += `Computer wins! ${computerChoice} beats ${humanChoice}.<br>`;
        computerScore++;
    }

    // call to helper
    printScore();

    // Check endgame state
    if(humanScore >= 5 || computerScore >=5){
        endGame();
    }
}


/* Write score to DOM */
function printScore(){
    resultBox.innerHTML += `Score: Human ${humanScore} / Computer ${computerScore}<br>`;
}


/* Endgame logic after first to 5 */
function endGame(){
    resultBox.innerHTML += "Game over! Tabulating final score . . .<br>";
    printScore();
    if(humanScore == 5){
        resultBox.innerHTML += "You win! Congratulations! Reset to play again.";
    } else {
        resultBox.innerHTML += "Sorry, you lost. Reset to play again.";
    }

    // disable button input after game ends
    let gameplayButtons = Array.from(document.querySelector(".gameplay-buttons").children);
    gameplayButtons.forEach(button => {
        button.disabled = true;
    });
}




/* Manual reset */
function reset(){
    // Reset variables
    humanScore = 0;
    computerScore = 0;
    humanSelection = "";
    resultBox.innerHTML = "Game results...<br>";

    // re-enable buttons to use again
    let gameplayButtons = Array.from(document.querySelector(".gameplay-buttons").children);
    gameplayButtons.forEach(button => {
        button.disabled = false;
    });
}

