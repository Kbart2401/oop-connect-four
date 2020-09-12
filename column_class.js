


class Column {
    constructor(name) {
        this.name = name;
        this.rows = [];
    }
    checkColumnFull() {
        if(this.rows.length === 5) {
            //add class full to the div column that corresponds to the instance number

        }
    }
    addToken(color) {
        this.rows.push(color);
    }

    add(num){
        //stores it in the bottom most entry of the column.
    }
    getTokenAt(rowIndex){// between 0-5
        if(rowIndex < 0 || rowIndex > 5){
            return undefined;
        }
        if(this.rows[rowIndex] === "red"){
            return 1
        } else if(this.rows[rowIndex] === "black"){
            return 2
        } else {
            return null;
        }

    }
}

export default Column ;
