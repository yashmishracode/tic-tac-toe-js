console.log("Welcone to Tic Tac Tae Game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let GameOver = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";

// Function to switch the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win

const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
        let wins= [
            [0 ,1 ,2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7,],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        wins.forEach(e => {
           if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== '')){
               document.getElementsByClassName("info")[0].innerText = boxTexts[e[0]].innerText + " Won";
               isgameover = true;
               document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
               GameOver.play();
               setTimeout(() => {
                   location.reload();
               }, 2000); 
           }
        })
}

//Game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText===''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
})
})

// Add onclick listener to reset button
reset.addEventListener("click", () => {
    let boxTexts = document.getElementsByClassName("boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    })
    