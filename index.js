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
        resultBox.innerHTML += `tie! ${humanChoice} meets ${computerChoice}.&#9;`;
        console.log(resultBox);
    }
    // case such that player wins
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {   resultBox.innerHTML += `You win! ${humanChoice} beats ${computerChoice}.&#9;`;
        humanScore++;
    }
    // case such that computer wins
     else if(computerChoice == "rock" && humanChoice == "scissors" ||
            computerChoice == "scissors" && humanChoice == "paper" ||
            computerChoice == "paper" && humanChoice == "rock")
    {   resultBox.innerHTML += `Computer wins! ${computerChoice} beats ${humanChoice}. &#9;`;
        computerScore++;
    }

    // call to helper
    printScore();
}




/*
function playGame(numRounds){
    let humanSelection, computerSelection;

    for(let i = 0; i < numRounds; i++){
        // Need to reprompt for every round
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Game over! Tabulating final score. . .");
    printScore();
} */





/* Write score to DOM */
function printScore(){
    resultBox.innerHTML += `Score: Human ${humanScore} / Computer ${computerScore}<br>`;
}


// click option -> start game, if game is not already in progress
// click option, run next round