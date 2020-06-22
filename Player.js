import Board from "./Board.js";
let newBoard = new Board();


export class Player{
    constructor(name, playNum){
        this.name = name;
        this.playNum = playNum;
    }
    playMove(colNum){
        let clickTargets = document.getElementById("click-targets");
        let board = newBoard.board;

        if(this.playNum === 1) {
            clickTargets.removeAttribute("class", "black");
            clickTargets.setAttribute("class", "red");

            if(colNum !== undefined) {
                for(let i=5; i>=0; i--) {
                    if(board[i][colNum] === "x") {
                        board[i][colNum] = "B";
                        let getID = `square-${i}-${colNum}`;
                        let el = document.getElementById(getID);
                        el.classList.add("black");
                        if(i === 0) {
                            let getId = `column-${colNum}`;
                            let el = document.getElementById(getId);
                            el.classList.add("full");
                        }
                        let winner = newBoard.hasWinner();
                        if(winner) {
                            newBoard.handleWin(winner);
                        }
                        break;
                    }

                }
            }
        } else {
            clickTargets.removeAttribute("class", "red");
            clickTargets.setAttribute("class", "black");

            if(colNum !== undefined) {
            for(let i=5; i>=0; i--) {
                if(board[i][colNum] === "x") {
                    board[i][colNum] = "R";

                    let getID = `square-${i}-${colNum}`;
                    let el = document.getElementById(getID);
                    el.classList.add("red");
                    if(i === 0) {
                        let getId = `column-${colNum}`;
                        let el = document.getElementById(getId);
                        el.classList.add("full");
                    }
                    let winner = newBoard.hasWinner();
                    if(winner) {
                        newBoard.handleWin(winner);
                    }
                    break;
                }
            }
            }
        }

    }

}
