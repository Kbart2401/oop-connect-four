import  Player  from './player_class.js';
import Column from './column_class.js';
import Game from './game_classes.js';

////////////GLOBAL VARIABLES////////////////
let game = undefined;
////////////GLOBAL METHODS////////////////
function updateUI(game){
    let board = document.getElementById("board-holder")
    if(game === undefined){
        board.classList.add("is-invisible")
    } else {
        board.classList.remove("is-invisible")
    }
    document.getElementById("game-name").innerHTML = game.getName();
   game.playInColumn();
    let clickTargets = document.getElementById('click-targets')
    if(game.playInColumn() === 1) {
        clickTargets.classList.add('red')
        clickTargets.classList.remove('black')
    }
    else {
        clickTargets.classList.add('black');
        clickTargets.classList.remove('red');

    }

}

///////////DOM Content Loaded//////////////
window.addEventListener("DOMContentLoaded", () => {
    let player1 = document.getElementById("player-1-name")
    let player2 = document.getElementById("player-2-name")


    let newGameBtn = document.getElementById("new-game")
player1.addEventListener("keyup", event =>{
if(player1.value.length > 0 && player2.value.length > 0){
    newGameBtn.removeAttribute("disabled");
}
});
player2.addEventListener("keyup", event =>{
    if(player1.value.length > 0 && player2.value.length > 0){
        newGameBtn.removeAttribute("disabled");
    }

});

newGameBtn.addEventListener("click", event =>{
    game = new Game (player1.value, player2.value);
    console.log()
    updateUI(game)

})

document.getElementById('click-targets').addEventListener('click', event => {
    let clickCol = event.target.id;
    if(clickCol.startsWith("column")){
   let colNum =  Number.parseInt(clickCol[clickCol.length - 1])

   game.playInColumn(colNum);
   updateUI(game);
    }


})





// const column0 = new Column("0");
// const column1 = new Column("1");
// const column2 = new Column("2");
// const column3 = new Column("3");
// const column4 = new Column("4");
// const column5 = new Column("5");
// const column6 = new Column("6");
// let instanceArr = [column0,column1, column2, column3, column4, column5, column6]

// let counter = 0;
// document.getElementById('click-targets').addEventListener('click', event => {


//     //get event target id, save to variable
//          //check last index of variable
//          //if column includes that index, push 0 to column
//          let tokenId = event.target.id;

//          counter++;

//          //need last index of the id and push into empty array

//     instanceArr.forEach(function(el){
//     if(el.name.includes(tokenId[tokenId.length - 1])){
//         el.addToken("red");
//         let squareDivs = Array.from(document.querySelectorAll(".token-square"))
//         for(let i = 0; i < squareDivs.length; i++){
//             let sqDivId = squareDivs[i].id;
//             let sqNum = sqDivId[sqDivId.length - 1];
//             console.log(sqNum)

//             // console.log(sqDivId)
//             if(el.name.includes(sqNum)){

//               let redToken = document.createElement("div");
//               redToken.classList.add("token","red");
//               let sqDiv = squareDivs[i]
//                 sqDiv.appendChild(redToken)

//             }


//         }

//     }
//     })

// })
})
