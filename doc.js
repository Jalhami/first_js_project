//step 2 

function getComputerChoice(){
    const randomNum = Math.floor(Math.random()*3) + 1 ;
    if(randomNum === 1) {
        return "rock" ;
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
} 
// console.log(getComputerChoice());

//step 3

function getHumanChoice(){
   return prompt("Select rock, paper, or scissors"); 
}
// console.log(getHumanChoice());

//step 4

let humanScore = 0;
let computerScore = 0;

//step 5

function playRound(humanChoice, computerChoice){
    const lowerHumanChoice = humanChoice.toLowerCase();
    const lowerComputerChoice = computerChoice.toLowerCase();

    if(lowerHumanChoice === lowerComputerChoice ) {
         alert("It's a draw");
    } else if (
        lowerHumanChoice === "rock" && lowerComputerChoice === "scissors" ||
        lowerHumanChoice === "scissors" && lowerComputerChoice === "paper" ||
        lowerHumanChoice === "paper" && lowerComputerChoice === "rock" 
    ) {
        alert(`${"Player"} has won the round!`);
        humanScore++;
    } else {
        alert(`${"Computer"} has won the round!`);
        computerScore++;
    }
    console.log(humanScore);
    console.log(computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//step 6

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.toLowerCase();
    const lowerComputerChoice = computerChoice.toLowerCase();

    if(lowerHumanChoice === lowerComputerChoice ) {
         alert("It's a draw");
    } else if (
        lowerHumanChoice === "rock" && lowerComputerChoice === "scissors" ||
        lowerHumanChoice === "scissors" && lowerComputerChoice === "paper" ||
        lowerHumanChoice === "paper" && lowerComputerChoice === "rock" 
    ) {
        alert(`${"Player"} has won the round!`);
        humanScore++;
    } else {
        alert(`${"Computer"} has won the round!`);
        computerScore++;
    }
    console.log(humanScore);
    console.log(computerScore);

    }
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame();

