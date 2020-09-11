class Game{
    constructor(player1Name, player2Name, currentPlayer = 1){
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.currentPlayer = currentPlayer;
    }
    getName(){
        return this.player1Name + " vs " + this.player2Name
    }
    playInColumn() {
        if(this.currentPlayer === 1) {
        this.currentPlayer = 2;
        }
        else {
            this.currentPlayer = 1;
        }
        return this.currentPlayer;
    }
}


export { Game }
