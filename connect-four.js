import {Game} from './Game.js';
import {Player} from './Player.js';
import Board from './Board.js';



window.addEventListener("DOMContentLoaded", event => {
    const newGameButton = document.getElementById("new-game");

    const playerOneInput = document.getElementById("player-1-name");
    const playerTwoInput = document.getElementById("player-2-name");

    function checkButton() {
        newGameButton.disabled = !(playerOneInput.value && playerTwoInput.value);
    }
    playerOneInput.addEventListener("keyup", e => {
        localStorage.setItem("playerOne", e.target.value);
        checkButton();
    })
    playerTwoInput.addEventListener("keyup", e => {
        localStorage.setItem("playerTwo", e.target.value);
        checkButton();
    })

    newGameButton.addEventListener("click", event => {
        playerOneInput.disabled = true;
        playerTwoInput.disabled = true;
        newGameButton.disabled = true;
        let p1Name = localStorage.getItem("playerOne");
        let p2Name = localStorage.getItem("playerTwo");

        let newGame = new Game();
        let playerOne = new Player(p1Name, 1);
        let playerTwo = new Player(p2Name, 2);

        let gameStatus = document.getElementById("game-name");
        let matchUp = document.createElement("h2");
        matchUp.innerHTML = `${p1Name} vs. ${p2Name}`;
        gameStatus.appendChild(matchUp);

        let clickTargets = document.getElementById("click-targets");

        playerOne.playMove();
        newGame.turn++;
        clickTargets.addEventListener("click", e => {
            let columnId = e.target.id;
            let column = document.getElementById(columnId);
            let columnNum = Number(columnId[columnId.length-1]);
            console.log(columnId, columnNum, newGame.turn);
            if(columnId.includes("column")) {
                if(newGame.turn % 2 === 0 && newGame.turn < 43) {
                    playerOne.playMove(columnNum);
                    newGame.turn++;
                } else if(newGame.turn % 2 !== 0 && newGame.turn < 43){
                    playerTwo.playMove(columnNum);
                    newGame.turn++;
                }
            }
        })

    })


})
