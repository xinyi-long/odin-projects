
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choices = ["rock","paper","scissors"]
    // console.log(choices[random]);
    return choices[random];
}

// will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
    let user = prompt("What is your choice? rock, paper or scissors");
    return user;
}   

function gameOver() {
    buttons.forEach( (button) => {
        button.remove();
        // body.appendChild(finalMsg);
        container.appendChild(restartBtn);
    });
}

function restart() {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 1;

    resultsDiv.innerText = 'Press button to start the game';
    restartBtn.remove();

    container.insertBefore( rockBtn, resultsDiv);
    container.insertBefore( paperBtn, resultsDiv);
    container.insertBefore( scissorBtn, resultsDiv);
    
}

function playRound(humanchoice, computerchoice) {
    // let computerchoice = getComputerChoice();
    // let humanchoice = getHumanChoice();
    resultsDiv.innerText = `Round ${roundCounter} 
    User chooses: ${humanchoice} 
    Computer chooses: ${computerchoice}`;

    if (computerchoice == humanchoice){
        resultsDiv.innerText = `Draw! Your weapon ${humanchoice} is the same as ${computerchoice}
        Score Table: \nYour score:${humanScore}\nComputer score:${computerScore}`;
    }
    else if (computerchoice == "rock" && humanchoice == "paper" || 
        computerchoice == "paper" && humanchoice == "scissors" ||
        computerchoice == "scissors" && humanchoice == "rock"
    ){
        humanScore++;
        resultsDiv.innerText = `Your weapon ${humanchoice} defeats ${computerchoice}. You win : D
        Score Table: \nYour score:${humanScore}\nComputer score:${computerScore}`;
    }
    else if (humanchoice == "rock" && computerchoice == "paper" || 
        humanchoice == "paper" && computerchoice == "scissors" ||
        humanchoice == "scissors" && computerchoice == "rock"){
        computerScore++;
        resultsDiv.innerText = `Your weapon ${humanchoice} is defeated by ${computerchoice}. You lose : (
        Score Table: \nYour score:${humanScore}\nComputer score:${computerScore}`;
    }
    roundCounter++;
    if (humanScore == 5 || computerScore == 5){
        if ( humanScore === computerScore ) {
            resultsDiv.innerText = `Draw!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        } else if (humanScore > computerScore) {
            resultsDiv.innerText = `User won the game!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        } else {
            resultsDiv.innerText = `Computer won the game!
            Game last ${roundCounter} rounds. 
            Scores table: \nUser: ${humanScore} \nComputer: ${computerScore}`;
        }
        return gameOver();
    }
}

// play 5 rounds
function playGame() {
    let i = 0;
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
}   

// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     playRound(getHumanChoice(),getComputerChoice());
//   });
// });

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

const container = document.querySelector("#container");
const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorBtn = document.querySelector("#scissorbtn");
const resultsDiv = document.createElement("div");
const buttons = document.querySelectorAll("button");
const restartBtn = document.createElement('button');

rockBtn.setAttribute('value', "rock");
paperBtn.setAttribute('value',"paper");
scissorBtn.setAttribute('value',"scissors");
resultsDiv.innerText = "Press the buttons to start the game.";
container.appendChild(resultsDiv);
restartBtn.innerText = 'Restart';


rockBtn.addEventListener('click', () => playRound(rockBtn.value, getComputerChoice() ) );
paperBtn.addEventListener('click', () => playRound(paperBtn.value, getComputerChoice() ) );
scissorBtn.addEventListener('click', () => playRound(scissorBtn.value, getComputerChoice() ) );
restartBtn.addEventListener('click', restart);
  
