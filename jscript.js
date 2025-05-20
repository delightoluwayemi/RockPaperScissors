const OPTIONS_COUNT = 3;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(OPTIONS_COUNT){
    let randomInt = Math.floor(Math.random() * OPTIONS_COUNT);

    if (randomInt == 0){
        return "Rock";
    }else if (randomInt == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

const body = document.querySelector("body");
const display = document.createElement("div");
const para = document.createElement("p");

const playRound = function (humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5){
        if (humanChoice == 'rock') {
            switch (computerChoice) {
                case "Rock":
                    display.textContent = `The round is a tie. The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Paper":
                    computerScore += 1;
                    display.textContent = `Paper beats Rock, Computer wins the round. The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Scissors":
                    humanScore += 1;
                    display.textContent = `Rock beats Scissors, Player wins the round. The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
            }
        } else if (humanChoice == 'paper') {
            switch (computerChoice) {
                case "Rock":
                    humanScore += 1;
                    display.textContent = `Paper beats Rock, Player wins the round.  The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Paper":
                    display.textContent = `The round is a tie. The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Scissors":
                    computerScore += 1;
                    display.textContent = `Scissors beats Paper, Computer wins the round.  The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
            }
        } else if (humanChoice == 'scissors') {
            switch (computerChoice) {
                case "Rock":
                    computerScore += 1;
                    display.textContent = `Rock beats Scissors, Computer wins the round.  The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Paper":
                    humanScore += 1;
                    display.textContent = `Scissors beats Paper, Player wins the round.  The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
                case "Scissors":
                    display.textContent = `The round is a tie. The score is COMPUTER:${computerScore} : PLAYER:${humanScore}`;
                    break
            }
        }
    }
    else if(humanScore == 5){
        display.textContent = `The score is COMPUTER:${computerScore} : PLAYER:${humanScore}.`;
        para.textContent = "PLAYER WINS!";
        body.appendChild(para);
    }else if(computerScore == 5){
        display.textContent = `The score is COMPUTER:${computerScore} : PLAYER:${humanScore}.`;
        para.textContent = "COMPUTER WINS!";
        body.appendChild(para);
    }
}

body.appendChild(display);

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        playRound(button.id, getComputerChoice(OPTIONS_COUNT));
    });
});

