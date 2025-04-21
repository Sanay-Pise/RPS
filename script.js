const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const computerChoiceEl = document.getElementById("computer-choice");
const computerMoveEmojiEl = document.getElementById("computer-move-emoji");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);

    resultEl.textContent = result;
    computerChoiceEl.textContent = `Computer chose: ${capitalize(computerChoice)}`;
    updateComputerMoveDisplay(computerChoice);
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${capitalize(player)} beats ${capitalize(computer)}.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${capitalize(computer)} beats ${capitalize(player)}.`;
  }
}

function updateComputerMoveDisplay(choice) {
  computerMoveEmojiEl.textContent = getEmoji(choice);
  computerMoveEmojiEl.style.backgroundColor = getBackgroundColor(choice);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getEmoji(choice) {
  switch (choice) {
    case "rock": return "👊";
    case "paper": return "🖐";
    case "scissors": return "✌";
  }
}

function getBackgroundColor(choice) {
  switch (choice) {
    case "rock": return "#133870";
    case "paper": return "#d91010";
    case "scissors": return "#008b09";
    default: return "#999";
  }
}
