const buttonsEl = document.querySelectorAll(".buttons");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;


buttonsEl.forEach((button)=>{
    
    resultEl.style.display = "block";
    button.addEventListener("click" , (event)=>{
        const result = playRound(event.target.id , computerPlay()); 

        resultEl.textContent = result;

    });
});


function computerPlay(){ 
    const choices = ["rock" , "paper" , "scissors"];
    const randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection , computerSelection){
    if(playerSelection === computerSelection){
        return "It is tie";
    } 

    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" &&
        computerSelection === "rock")||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){  
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win ! " + playerSelection + " beats " +  computerSelection;
    
    }
    else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose ! " + computerSelection + " beats " + playerSelection; 
    }

}