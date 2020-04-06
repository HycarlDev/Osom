const game = () => {
    // Global variables
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        // Initialize the variables
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match")

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play the game
    const playMatch = () => {
        const options = document.querySelectorAll(".options button"); // Player options
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });

        // Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        // Actions when player chooses a weapon
        options.forEach(option => {
            option.addEventListener("click", function() {
                // Computer's weapon choices
                const computerNumber = Math.floor(Math.random() * 3); // Randomize the options for NPC based on the array
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Call compareHands() function when the NPC has choose a weapon
                    compareHands(this.textContent, computerChoice);

                    // Update images when weapons are chosen
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                // Set the animation so it won't be instantly changed
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        // Check for tie state
        if (playerChoice === computerChoice) {
            winner.textContent = "You both are very strong!";
            return;
        }

        // Check for rock state
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }

        // Check for paper state
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            }
        }

        // Check for scissors state
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // Call or organize the inner variables
    startGame();
    playMatch();
};

// Start the main function
game();