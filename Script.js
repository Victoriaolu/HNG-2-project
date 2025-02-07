
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

let score = 0;
let targetColor = '';
const colorBox = document.getElementById('colorBox');
const scoreDisplay = document.getElementById('score');
const gameStatus = document.getElementById('gameStatus');
const colorOptionsContainer = document.getElementById('colorOptions');

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function startNewGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;
    gameStatus.innerText = '';
    renderColorOptions();
    updateScoreDisplay();
}

function renderColorOptions() {
    colorOptionsContainer.innerHTML = '';
    const options = [...colors];
    options.sort(() => Math.random() - 0.5);
    options.forEach(color => {
        const button = document.createElement('button');
        button.className = 'color-button';
        button.style.backgroundColor = color;
        button.addEventListener('click', () => handleGuess(color));
        button.setAttribute('data-testid', 'colorOption');
        colorOptionsContainer.appendChild(button);
    });
}

function handleGuess(guess) {
    if (guess === targetColor) {
        score++;
        gameStatus.innerText = 'Correct guess! ';
        gameStatus.classList.remove('fade-out');
        void gameStatus.offsetWidth; // Trigger reflow
        gameStatus.classList.add('fade-out');
    } else {
        gameStatus.innerText = 'Wrong guess! Try again. ';
        gameStatus.classList.remove('fade-out');
        void gameStatus.offsetWidth; // Trigger reflow
        gameStatus.classList.add('fade-out');
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreDisplay.innerText = `Score: ${score}`;
}

document.getElementById('newGameButton').addEventListener('click', startNewGame);

// Start the first game
startNewGame();
