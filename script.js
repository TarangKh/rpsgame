
let userScore = 0;
let compScore = 0;

let message = document.querySelector("#msg");
let putUser = document.querySelector("#user-score");
let putComp = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("user win!");
        userScore += 1;
        putUser.innerHTML = userScore;
        message.innerHTML = "You Win";
        message.style.backgroundColor = "green";
    }
    else {
        console.log("user lost!");
        compScore += 1;
        putComp.innerHTML = compScore;
        message.innerHTML = "You Lose";
        message.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("Choice is clicked.", userChoice);
    // Generate Computer Choice
    const compChoice = getCompChoice();
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        console.log("draw");
        message.innerHTML = "Draw";
        message.style.backgroundColor = "blue";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);        
    });
});