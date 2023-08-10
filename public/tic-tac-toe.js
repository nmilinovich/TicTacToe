let playerTurn = "x"
window.onload = () => {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.childNodes.length === 0) {
                cell.classList.add("occupied");
                const img = document.createElement("img");
                img.src = playerTurn === "x" ? "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg" : "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                playerTurn = playerTurn === "x" ? "o" : "x";
                cell.appendChild(img);
            }
    })
});
}
