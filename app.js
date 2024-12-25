const maxLives = 3;
    let lives = maxLives;
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const heartsElement = document.getElementById('hearts');
    const messageElement = document.getElementById('message');
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const restartButton = document.getElementById('restart');

    function updateHearts() {
      heartsElement.textContent = '❤️'.repeat(lives);
    }

    function resetGame() {
      lives = maxLives;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      updateHearts();
      messageElement.textContent = 'Guess a number between 1 and 100:';
      guessInput.value = '';
      guessInput.disabled = false;
      submitButton.disabled = false;
      restartButton.classList.add('hidden');
    }

    submitButton.addEventListener('click', () => {
      const guess = Number(guessInput.value);
      if (!guess || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100!';
        return;
      }

      if (guess === randomNumber) {
        messageElement.textContent = '🎉 Congratulations! You guessed it right!';
        guessInput.disabled = true;
        submitButton.disabled = true;
        restartButton.classList.remove('hidden');
      } else {
        lives--;
        if (lives === 0) {
          messageElement.textContent = '😞 Game Over! The number was ' + randomNumber + '.';
          guessInput.disabled = true;
          submitButton.disabled = true;
          restartButton.classList.remove('hidden');
        } else {
          messageElement.textContent = guess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.';
          updateHearts();
        }
      }
    });

    restartButton.addEventListener('click', resetGame);

    resetGame();