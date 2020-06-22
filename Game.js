export class Game {
    constructor(){
        this.status = "inProgress";
        this.turn = 0;
        this.playerTurn = "playerOne";
    }
    setPlayerTurn(){
        if (this.status !== "inProgress"){
            this.playerTurn = "none";
        } else{
            console.log(this.turn);
            if ((this.turn % 2 === 0) || this.turn === 0){
                this.playerTurn = "playerOne";
                return this.playerTurn;
            }
            else{
                this.playerTurn = "playerTwo";
                return this.playerTurn;
            }
        }
    }
}
