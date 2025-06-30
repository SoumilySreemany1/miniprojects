let randomNumber = 27;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempt(s).`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";
  }
}

function resetGame() {
  randomNumber = 27;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
}
