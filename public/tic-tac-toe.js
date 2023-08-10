let playerTurn = "x"
let winner = "x";
window.onload = () => {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.childNodes.length === 0) {
                cell.classList.add(playerTurn);
                const img = document.createElement("img");
                img.src = playerTurn === "x" ? "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg" : "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                playerTurn = playerTurn === "x" ? "o" : "x";
                cell.appendChild(img);
                checkForWinner();
            }
        })
    });
    function checkForWinner() {
        // console.log(cells);
        const currentBoard = Array.from(cells).map(cell => cell.classList.contains("x") ? "x" : (cell.classList.contains("o") ? "o" : ""));
        // console.log([currentBoard[0],currentBoard[1],currentBoard[2]])
        // const winningBoard =
        console.log(currentBoard);
        const combo1 = [currentBoard[0], currentBoard[1], currentBoard[2]].join("");
        console.log(combo1)
        const winnerXArray = "xxx";
        const winnerOArray = "ooo"
        if ((combo1 == winnerXArray) || (combo1 == winnerOArray)) {
            // playerTurn = playerTurn === "x" ? "o" : "x";
            console.log("won");
        }
        // const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

        // for (const combo of winningCombos) {
        //     for (cell of cells) {
        //         if (cell.classList.contains("x")) {
        //             console.log("x")
        //         }
        //     }
        // }
    }
}
