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

function getHumanChoice() {
  while(true) {
    answer = prompt("Rock, paper, scissors: ").toLowerCase();

    if (answer === "rock" || answer === "paper" || answer === "scissors") {
      return answer
    } else {
      console.log("This is not a valid option. Please try again!");
    }
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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    let roundWinner = determineWinner(humanChoice, computerChoice);

    switch(roundWinner) {
      case "draw":
        console.log("It's a draw!");
        break;
      case "human":
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        break;
      case "computer":
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        break;
    }
  }

  let nofRounds = 5;
  for (let i = 0; i < nofRounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Scores: You won ${humanScore} rounds, Computer won ${computerScore}, ${nofRounds-humanScore-computerScore} draws`);
}
