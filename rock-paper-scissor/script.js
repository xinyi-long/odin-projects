
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

function playRound(humanchoice, computerchoice) {
    // let computerchoice = getComputerChoice();
    // let humanchoice = getHumanChoice();
    if (computerchoice == humanchoice){
        console.log("It's a draw!");
    }
    else if (computerchoice == "rock" && humanchoice == "paper" || 
        computerchoice == "paper" && humanchoice == "scissors" ||
        computerchoice == "scissors" && humanchoice == "rock"
    ){
        console.log(`Your weapon ${humanchoice} defeats ${computerchoice}. You win : D`);
    }
    else if (humanchoice == "rock" && computerchoice == "paper" || 
        humanchoice == "paper" && computerchoice == "scissors" ||
        humanchoice == "scissors" && computerchoice == "rock"){
        console.log(`Your weapon ${humanchoice} is defeated by ${computerchoice}. You lose : (`);
    }
}

// play 5 rounds
function playGame() {
    let i = 0;
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
playGame();