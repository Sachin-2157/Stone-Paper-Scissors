let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const compTurn = ["rock", "paper", "scissors"];
    // Here we will use aFUNCTION [(Math.floor(Math.random)()] to genrate various variable option for comp. then we will multiply it by 3 because this fun generate no. b/w 0 and 1 so we will match it will individual array;
    const randomIdx = Math.floor(Math.random() * 3);
    return compTurn[randomIdx];
};

const drawGame = () => {
  //  console.log("Game was Draw!");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("You won!")
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
       // console.log("You Lose!")
       compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    //console.log("user choice", userChoice);
    // generate computer choice -> modular way of programmming i.e use small function to perform small work.
    const compChoice = genCompChoice();

if (userChoice === compChoice){
    //draw game
    drawGame();
} else {
    let userWin = true;
    if ( userChoice === "rock") {
        // comp's choice can be scissors,paper but not rock if rock then game will draw;
        userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper"){
        // comp choice -> rock , scissors;
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
   choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
      //  console.log("clicked");
        playGame(userChoice);
    });
});
