let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        displayResult(`Parabéns! Você acertou o número em ${attempts} tentativas.`);
    } else if (guess < randomNumber) {
        displayResult("Tente um número mais alto.");
    } else {
        displayResult("Tente um número mais baixo.");
    }

    guessInput.value = "";
    guessInput.focus();
}

function displayResult(message) {
    const result = document.getElementById("result");
    result.textContent = message;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    displayResult("");
    document.getElementById("guessInput").value = "";
}
