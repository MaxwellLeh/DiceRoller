async function initializeGame() {

    const game = document.querySelectorAll(".cell");

    for (let i = 0; i < game.length; i++) {

        let colorState = 0;
        const play = game[i];

        play.addEventListener("click", () => {

            if (colorState === 0) {
                play.style.backgroundColor = "black";
                colorState = 1; 
            } else if (colorState === 1) {
                play.style.backgroundColor = "red";
                colorState = 2;
            } else {
                play.style.backgroundColor = "white";
                colorState = 0; 
            }
        });
    }
}

initializeGame();