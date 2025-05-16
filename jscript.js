const OPTIONS_COUNT = 3;

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

function getHumanChoice(){
    let choice = prompt("What do you choose?");
    
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors"){
        return choice;
    }
}

playGame();
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const playRound = function(humanChoice, computerChoice) {
        if (humanChoice == 'rock') {
            switch (computerChoice) {
                case "Rock":
                    console.log("It is a tie");
                case "Paper":
                    console.log("Paper beats Rock, Computer wins");
                    computerScore += 1;
                case "Scissors":
                    console.log("Rock beats Scissors, Player wins");
                    humanScore += 1;
            }
        } else if (humanChoice == 'paper') {
            switch (computerChoice) {
                case "Rock":
                    console.log("Paper beats Rock, Player wins");
                    humanScore += 1;
                case "Paper":
                    console.log("It is a tie");
                case "Scissors":
                    console.log("Scissors beats Paper, Computer wins");
                    computerScore += 1;
            }
        } else if (humanChoice == 'scissors') {
            switch (computerChoice) {
                case "Rock":
                    console.log("Rock beats Scissors, Computer wins");
                    computerScore += 1;
                case "Paper":
                    console.log("Scissors beats Paper, Player wins");
                    humanScore += 1;
                case "Scissors":
                    console.log("It is a tie");
            }
        }
    }
    for (i =0; i<5; i++){
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice(OPTIONS_COUNT);

        playRound(humanChoice,computerChoice);
    }

    if (humanScore > computerScore){
        console.log("Player wins the game");
    }else if(computerScore > humanScore){
        console.log("Computer wins");
    }else{
        console.log(`The game is a tie. The score is Computer: ${computerScore} : Player: ${humanScore}`);
    }
}