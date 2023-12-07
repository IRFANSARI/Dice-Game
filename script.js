// Selecting Elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const curScore0 = document.querySelector("#current--0");
const curScore1 = document.querySelector("#current--1");

// Stating Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gamePlaying = 1;

// Rolling a Dice
btnRoll.addEventListener("click", function() {
    if(gamePlaying) {
        const curDice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = "dice-" + curDice + ".png";
        diceEl.classList.remove("hidden");

        if(curDice != 1) {
            currentScore += curDice;
            document.querySelector("#current--" + activePlayer).textContent = currentScore;
        }
        else {
            changePlayer();
        }
    }
});

//Function to change the active player
const changePlayer = function() {
    currentScore = 0;
    document.querySelector("#current--" + activePlayer).textContent = currentScore;
    document.querySelector(".player--" + activePlayer).classList.remove("player--active")
    activePlayer = activePlayer == 0? 1 : 0;
    document.querySelector(".player--" + activePlayer).classList.add("player--active");
};

// Adding Hold Points Functionalities
btnHold.addEventListener("click", function() {
    if(gamePlaying) {
        scores[activePlayer] += currentScore;
        document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20) {
            document.querySelector(".player--" + activePlayer).classList.add("player--winner");
            document.querySelector(".player--" + activePlayer).classList.remove("player--active");
            diceEl.classList.add("hidden");
            gamePlaying = 0;
        } else {
            changePlayer();
        }
    }
});

// New Game Button
btnNew.addEventListener("click", function() {
    score0.textContent = 0;
    score1.textContent = 0;
    curScore0.textContent = 0;
    curScore1.textContent = 0;
    diceEl.classList.add("hidden");

    scores[0] = 0;
    scores[1]= 0;
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = 1;
    document.querySelector(".player--0").classList.remove("player--winner", "player--active");
    document.querySelector(".player--1").classList.remove("player--winner", "player--active");
    document.querySelector(".player--0").classList.add("player--active");
});