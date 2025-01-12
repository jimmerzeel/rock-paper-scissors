let computerScore = 0;
let humanScore = 0;
let score = document.querySelector(".results");

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function getComputerChoice() {
  let computerInput = getRandomInt(3);
  switch (computerInput) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    return "human";
  } else {
    return "computer";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  score.innerHTML = "";
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let roundWinner = determineWinner(humanChoice, computerChoice);
    let resultLine = document.createElement("p");

    switch(roundWinner) {
      case "draw":
        resultLine.textContent += "It's a draw!\n";  
        break;
      case "human": 
        resultLine.textContent += `You win! ${humanChoice} beats ${computerChoice}\n`
        humanScore++;
        break;
      case "computer":
        resultLine.textContent += `You lose! ${computerChoice} beats ${humanChoice}\n`
        computerScore++;
        break;
    }
    resultLine.textContent += `Current score: Human: ${humanScore} points vs. Computer: ${computerScore}\n`;

    score.appendChild(resultLine);

    if (humanScore === 5) {
      setTimeout(() => {
        alert("You won!");
        resetGame();
      }, 0);
    } else if (computerScore === 5) {
      setTimeout(() => {
        alert("You lost!");
        resetGame();
      }, 0);
    }
  }


  let rockButton = document.querySelector("#rock");
  let paperButton = document.querySelector("#paper");
  let scissorsButton = document.querySelector("#scissors");

  rockButton.addEventListener("click", (e) => playRound("rock", getComputerChoice()));
  paperButton.addEventListener("click",  () => playRound("paper", getComputerChoice()));
  scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

}
playGame();