document.addEventListener("", () => {
    const square = document.querySelectorAll(".cell");

    square.forEach(cell => {
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "black";
        });
    });
});