
import  Column  from "./column_class.js";


class Game {
    constructor(player1Name, player2Name, currentPlayer = 1){
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.currentPlayer = currentPlayer;
        this.column = [new Column(), new Column(),new Column(),new Column(),new Column(),new Column(),new Column(),]
    }
    getName(){
        return this.player1Name + " vs " + this.player2Name
    }
    playInColumn(indexNum) {

        console.log(indexNum, this.column[indexNum])
        debugger
        this.column[indexNum].add(this.currentPlayer)

        if(this.currentPlayer === 1) {
        this.currentPlayer = 2;
        }
        else {
            this.currentPlayer = 1;
        }
        return this.currentPlayer;

    }
    getTokenAt(rowIndex, columnIndex){
        return this.column[columnIndex].getTokenAt(rowIndex);

    }
}


export default Game
