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
}

export {
    Column,
};
