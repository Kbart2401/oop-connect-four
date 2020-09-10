import { Player } from './player_class.js';
import { Column } from './column_class.js';
window.addEventListener("DOMContentLoaded", () => {
//Instances of columns

const column0 = new Column("0");
const column1 = new Column("1");
const column2 = new Column("2");
const column3 = new Column("3");
const column4 = new Column("4");
const column5 = new Column("5");
let instanceArr = [column0,column1, column2, column3, column4, column5]

let counter = 0;
document.getElementById('click-targets').addEventListener('click', event => {


    //get event target id, save to variable
         //check last index of variable
         //if column includes that index, push 0 to column
         let tokenId = event.target.id;

         counter++;

         //need last index of the id and push into empty array

    instanceArr.forEach(function(el){
    if(el.name.includes(tokenId[tokenId.length - 1])){
        el.addToken("red");
        let squareDivs = Array.from(document.querySelectorAll(".token-square"))
        for(let i = 0; i < squareDivs.length; i++){
            let sqDivId = squareDivs[i].id;
            let sqNum = sqDivId[sqDivId.length - 1];
            console.log(sqNum)

            // console.log(sqDivId)
            if(el.name.includes(sqNum)){

              let redToken = document.createElement("div");
              redToken.classList.add("token","red");
              let sqDiv = squareDivs[i]
                sqDiv.appendChild(redToken)

            }


        }

    }
    })

})

 //If column name matches square id length-1 we will add a background color class
//  call queryselectorAll save to square variable and use for loop to iterate to check for match
// if col name matches square then






})
