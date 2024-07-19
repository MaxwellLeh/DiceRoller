async function initializeGame() {

    const game = document.querySelectorAll(".cell");

    for (let i = 0; i < game.length; i++) {

        let clickState = 0;
        const play = game[i];

        play.addEventListener("click", () => {

            if (clickState === 0) {
                play.style.backgroundImage = "url('circle.png')";
                clickState = 1; 
            } else if (clickState === 1) {
                play.style.backgroundImage = "url('cross.png')";
                clickState = 2;
            } else {
                play.style.backgroundImage = "none";
                clickState = 0; 
            }
        });
    }
}

initializeGame();