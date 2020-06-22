
// Board
// [[x, x, x, x, x, x, x]
//  [x, x, x, x, x, x, x]
//  [x, x, x, x, x, x, x]
//  [x, x, x, x, x, x, x]
//  [x, x, x, x, x, x, x]
//  [x, x, x, x, x, x, x]]

export default class Board {
    constructor() {
        this.board =   [["x", "x", "x", "x", "x", "x", "x"],
                        ["x", "x", "x", "x", "x", "x", "x"],
                        ["x", "x", "x", "x", "x", "x", "x"],
                        ["x", "x", "x", "x", "x", "x", "x"],
                        ["x", "x", "x", "x", "x", "x", "x"],
                        ["x", "x", "x", "x", "x", "x", "x"]];
    }
    isFilled() {
        for(let i=0; i<6; i++) {
            for(let j=0; j<7; j++) {
                let position = this.board[i][j];
                if(position === "x") return false;
            }
        }
        return true;
    }


    hasWinner() {
        // test horizontally
        for(let i=5; i>=0; i--) {
            let horizontalArray = this.board[i];
            for(let j=0; j<4; j++) {
                let el = horizontalArray[j];
                if(el !== "x") {
                    if(el === horizontalArray[j+1] && el === horizontalArray[j+2] && el === horizontalArray[j+3]) {

                        return el;
                    }
                }
            }
        }

        // test vertically
        for (let i = 5; i >2; i--){
            let outerArr = this.board[i];
            for (let j = 0; j < 7; j++){
                let first = this.board[i-1];
                let second = this.board[i-2];
                let third = this.board[i-3];
                if(outerArr[j] !== "x") {
                    if(outerArr[j] === first[j] && outerArr[j] === second[j] && outerArr[j] === third[j]) {
                        return outerArr[j];
                    };
                }

            }

        }

        // test diagonally
        for(let i=5; i>2; i--) {
            for(let j=0; j<4; j++) {
                let first = this.board[i][j];
                let second = this.board[i-1][j+1];
                let third = this.board[i-2][j+2];
                let fourth = this.board[i-3][j+3];
                if(first !== "x") {
                    if(first === second && first === third && first === fourth) {
                        return first;
                    }
                }
            }
        }
        // test diagonally
        for(let i=5; i>2; i--) {
            for(let j=6; j>2; j--) {
                let first = this.board[i][j];
                let second = this.board[i-1][j-1];
                let third = this.board[i-2][j-2];
                let fourth = this.board[i-3][j-3];
                if(first !== "x") {
                    if(first === second && first === third && first === fourth) {
                        return first;
                    }
                }
            }
        }
        return false;
    }


    handleWin(winner) {
        let getDivs = document.getElementsByClassName("click-target");
        for(let val of getDivs) {
            val.classList.add("full");
        };
        const newGameButton = document.getElementById("new-game");
        newGameButton.disabled = false;

        let gameStatus = document.getElementById("game-name");
        let p1Name = localStorage.getItem("playerOne");
        let p2Name = localStorage.getItem("playerTwo");
        let winning = winner === "R" ? p1Name : p2Name;
        gameStatus.innerHTML = `<h2>${winning} won the game!</h2>`;
        newGameButton.addEventListener("click", e => {
            location.reload();
        })
    }
}
