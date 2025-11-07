// Note: In JavaScript, function declarations (including the body) are hoisted

// Control Flow
// playGame() loops through multiple rounds
// game variables defined inside playGame()



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





/* Prompt human for their rps */
function getHumanChoice(){
    let humanChoice = prompt('Enter "rock", "paper", or "scissors".');

    // handle reprompt
    while(humanChoice == null || 
            humanChoice !== 'rock' && 
            humanChoice !== 'paper' && 
            humanChoice !== 'scissors')
        { humanChoice = prompt("Please try again. Enter 'rock', 'paper', or 'scissors'."); }

    // standardize output
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// Game Variables
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
/* Play Round : Compare human & computer results, dole points. */
function playRound(humanChoice, computerChoice){
    // Case such that a tie occurs
    if(humanChoice === computerChoice){
        console.log(`tie! ${humanChoice} meets ${computerChoice}.`);
    }
    // case such that player wins
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock")
    {   console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    // case such that computer wins
     else if(computerChoice == "rock" && humanChoice == "scissors" ||
            computerChoice == "scissors" && humanChoice == "paper" ||
            computerChoice == "paper" && humanChoice == "rock")
    {   console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    // call to helper
    printScore(humanScore, computerScore);
}





/* Helper function : print score */
function printScore(humanScore, computerScore){
    console.log(`Score: Human ${humanScore} / Computer ${computerScore}`);
}