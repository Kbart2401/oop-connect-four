class Column {
    constructor() {
        this.rows = [];
    }
    checkColumnFull() {
        if(this.rows.length === 5) {
            //add class full to the div column that corresponds to the instance number

        }
    }
    addToken() {
        this.rows.push(0);
    }
}

export {
    Column,
};