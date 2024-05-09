let money = 100; // Starting money
const resultElement = document.getElementById('result');
const walletElement = document.getElementById('money');

function updateWallet() {
  walletElement.innerText = money.toFixed(2);
}

function displayResult(message) {
  resultElement.innerText = message;
}

function makeChoice(choice) {
  let eventOutcome = Math.random();
  if (choice === 'invest') {
    if (eventOutcome > 0.5) {
      money += 50;
      displayResult("Your investment paid off!");
    } else {
      money -= 50;
      displayResult("Your investment did not go well.");
    }
  } else if (choice === 'leisure') {
    if (eventOutcome > 0.5) {
      money -= 75;
      displayResult("You had a great time, but it was quite expensive.");
    } else {
      money -= 25;
      displayResult("You enjoyed some affordable leisure time.");
    }
  }
  updateWallet();

  if (money <= 0) {
    endGame();
  } else {
    randomQuestion();
  }
}

function randomQuestion() {
  let scenarios = [
    "Do you want to invest in a friend's start-up or go on a luxury vacation?",
    "Do you choose to buy stocks or spend a weekend at a spa resort?",
  ];

  let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  displayResult(randomScenario);
}

function endGame() {
  let finalMessage = "";
  if (money > 200) {
    finalMessage = "You're a savvy investor! You know when to take risks and it has paid off.";
  } else if (money > 100) {
    finalMessage = "You've made some smart choices, balancing leisure and investment.";
  } else {
    finalMessage = "You've enjoyed your time, but haven't made the best financial choices.";
  }

  displayResult(finalMessage);
  document.getElementById('invest-button').disabled = true;
  document.getElementById('leisure-button').disabled = true;
}
updateWallet();
randomQuestion();
