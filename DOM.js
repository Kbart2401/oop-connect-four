import { Player } from './player_class.js';
import { Column } from './column_class.js';
window.addEventListener("DOMContentLoaded", () => {
//Instances of columns
const column0 = new Column();
const column1 = new Column();
const column2 = new Column();
const column3 = new Column();
const column4 = new Column();
const column5 = new Column();

let counter = 0;
document.getElementById('click-targets').addEventListener('click', event => {
         //get event target id, save to variable
         //check last index of variable
         //if column includes that index, push 0 to column
         let tokenId = event.target.id;
         console.log(tokenId);
         counter++;
})






})