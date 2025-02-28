const categories = {
    fruits: ["🍎", "🍌", "🍉", "🍇", "🍒", "🍍", "🥝", "🍑"],
    emojis: ["😀", "😂", "😎", "😍", "😡", "🤖", "👻", "🎃"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🦁"],
    planets: ["🌍", "🌕", "🪐", "🌞", "⭐", "🌙", "🌌", "☄"],
    flags: ["🇺🇸", "🇬🇧", "🇨🇦", "🇫🇷", "🇩🇪", "🇮🇳", "🇨🇳", "🇧🇷"]
};

let gameBoard, firstCard, secondCard, score, timeLeft, timerInterval;

function startGame(category) {
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    
    const icons = [...categories[category], ...categories[category]];
    icons.sort(() => Math.random() - 0.5);
    
    gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    gameBoard.style.gridTemplateColumns = `repeat(4, 100px)`;

    score = 0;
    document.getElementById("score").textContent = score;
    
    timeLeft = 30;
    document.getElementById("timer").textContent = timeLeft;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    icons.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        card.innerHTML = "?";
        card.addEventListener("click", handleCardClick);
        gameBoard.appendChild(card);
    });
}

function handleCardClick() {
    if (this.classList.contains("flipped") || this.classList.contains("matched")) return;

    this.classList.add("flipped");
    this.innerHTML = this.dataset.icon;

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.icon === secondCard.dataset.icon) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        score += 10;
        document.getElementById("score").textContent = score;
        resetCards();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.innerHTML = "?";
            secondCard.innerHTML = "?";
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
    } else {
        clearInterval(timerInterval);
        alert("Time's up! Game Over.");
        restartGame();
    }
}

function restartGame() {
    document.getElementById("landing-page").classList.remove("hidden");
    document.getElementById("game-container").classList.add("hidden");
    clearInterval(timerInterval);
}
