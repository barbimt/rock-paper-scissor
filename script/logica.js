var rockHtml = document.getElementById("rock");
var paperHtml = document.getElementById("paper");
var scissorsHtml = document.getElementById("scissors");
var userScore = document.getElementById("user-score");
var pcScore = document.getElementById("pc-score");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

rockHtml.addEventListener("click", choseRock);
paperHtml.addEventListener("click", chosePaper);
scissorsHtml.addEventListener("click", choseScissors);

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";

var pcChose = "";
var userChose = "";
var userWon = false;


function choseRock() {
    userChose = rock;
    console.log("El usuario eligio " + userChose);
    choosePcOption(); //llamo a la funcion 
}

function chosePaper() {
    userChose = paper;
    console.log("El usuario eligio " + userChose);
    choosePcOption();
}

function choseScissors() {
    userChose = scissors;
    console.log("El usuario eligio " + userChose);
    choosePcOption();
}

function choosePcOption() {
    var options = [rock, paper, scissors];
    var nroRandom = Math.floor(Math.random() * 3);
    pcChose = options[nroRandom];
    console.log("La pc eligio " + pcChose);
    play();
}

function play() {
    switch (userChose) {
        case rock:
            if (pcChose == paper) {
                userWon = false;
                pcWon();
                break;
            }

            if (pcChose == scissors) {
                userWon = true;
                showUserWon();
                break;
            }

            if (pcChose == rock) {
                draw();
                break;
            }

        case paper:
            if (pcChose == paper) {
                draw();
                break;
            }

            if (pcChose == scissors) {
                userWon = false;
                pcWon();
                break;
            }

            if (pcChose == rock) {
                userWon = true;
                showUserWon();
                break;
            }

        case scissors:
            if (pcChose == paper) {
                userWon = true;
                showUserWon();
                break;
            }

            if (pcChose == scissors) {
                draw();
                break;
            }

            if (pcChose == rock) {
                userWon = false;
                pcWon();
                break;
            }
    }

}

var userScoreInternal = 0;
var pcScoreInternal = 0;

function pcWon() {
    pcScoreInternal++;
    pcScore.innerHTML = pcScoreInternal;
    result.innerHTML = `<h1>You lost!😪</h1> <p>Computer chose <strong>${pcChose}</strong></p>`;
    modal.style.display = 'block';
    modalContent.style.backgroundColor = "#D6433A";
}

function showUserWon() {
    userScoreInternal++;
    userScore.innerHTML = userScoreInternal;
    result.innerHTML = `<h1>You won!😁</h1> <p>Computer chose <strong>${pcChose}</strong></p>`;
    modal.style.display = 'block';
    modalContent.style.backgroundColor = "#9DE099";
}

function draw() {
    console.log("empate");
    result.innerHTML = `<h1>It's a draw</h1> <p>You both chose <strong>${pcChose}</strong></p>`;
    modal.style.display = 'block';
}


function clearModal(e) {
    if (e.target == modal || e.target == modalContent) {
        modal.style.display = "none"
        modalContent.style.backgroundColor = "#989ee0";
    }
}

window.addEventListener('click', clearModal);