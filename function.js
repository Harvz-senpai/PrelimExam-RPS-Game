let paper = "image/paper-hand.png";
let rock = "image/rock-hand.png";
let scissor = "image/scissor-hand.png";

function play() {
    let bg = document.getElementById("container");
    bg.style.backgroundColor = "gray";

    let pagain = document.getElementById("pg");
    pagain.style.display = "block";
    let newg = document.getElementById("ng");
    newg.style.display = "none";
    let play = document.getElementById("playbttn");
    play.style.display = "none";

    //where the image make changes depends on the random number generated
    let playr1 = document.getElementById("P1");
    let R1 = Math.floor(Math.random() *3)+1;
    if(R1 === 1)
    {
        playr1.src = rock;
    }
    else if(R1 === 2)
    {
        playr1.src = paper;
    }
    else
    {
        playr1.src = scissor;
    }

    let playr2 = document.getElementById("P2");
    let R2 = Math.floor(Math.random() *3)+1;
    if(R2 === 1)
    {
        playr2.src = rock;
    }
    else if(R2 === 2)
    {
        playr2.src = paper;
    }
    else
    {
        playr2.src = scissor;
    }

    //condition where it determines the winner per round
    let res = document.getElementById("result");
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2"); 
    if (R1 === R2 ) {
        res.innerHTML = "DRAW!"
    }else if (R1 === 2 && R2 === 1 || R1 === 3 && R2 == 2 || R1 == 1 && R2 === 3) {
        res.innerHTML = "Player 1 won"
        score1.innerHTML = parseInt(score1.innerHTML) + 1;
    }else  {
        res.innerHTML = "Player 2 won";
        score2.innerHTML = parseInt(score2.innerHTML) + 1;
    }
    
    //condition that determines the over all winner
    if (score1.innerHTML === "3")  {
        let bg = document.getElementById("container");
        bg.style.backgroundColor = "green";

        let newg = document.getElementById("ng");
        newg.style.display = "block";
        let pagain = document.getElementById("pg");
        pagain.style.display = "none";
        let play = document.getElementById("playbttn");
        play.style.display = "none";
    }else if(score2.innerHTML === "3") {
        let bg = document.getElementById("container");
        bg.style.backgroundColor = "green";

        let newg = document.getElementById("ng");
        newg.style.display = "block";
        let pagain = document.getElementById("pg");
        pagain.style.display = "none";
        let play = document.getElementById("playbttn");
        play.style.display = "none";
        }
    }

function playagain() {

        let bg = document.getElementById("container");
        bg.style.backgroundColor = "white";
        //changing the button wether to reset or to play again
        let play = document.getElementById("playbttn");
        play.style.display = "block";
        let pagain = document.getElementById("pg");
        pagain.style.display = "none";
}

function newgame() {
        let play = document.getElementById("playbttn");
        play.style.display = "block";
        let pagain = document.getElementById("pg");
        pagain.style.display = "none";
        let newg = document.getElementById("ng");
        newg.style.display = "none";

        let playr1 = document.getElementById("P1");
        let playr2 = document.getElementById("P2");

        playr1.src = paper;
        playr2.src = paper;

        let score1 = document.getElementById("score1");
        let score2 = document.getElementById("score2"); 

        score1.innerHTML = "0"
        score2.innerHTML = "0"

        let res = document.getElementById("result");
         res.innerHTML = "---";

         let bg = document.getElementById("container");
         bg.style.backgroundColor = "red";
    }
