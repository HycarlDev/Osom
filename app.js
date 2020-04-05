const game = () => {
    // Global variables
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        // Initialize the variables
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match")

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
        });
    };

    // Call or organize the inner variables
    startGame();
};

// Start the main function
game();