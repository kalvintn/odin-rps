// Note: In JavaScript, function declarations (including the body) are hoisted





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

    return humanChoice;
}