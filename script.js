'use strict';
let flag = 0;
let dice = document.querySelectorAll('.dice');

let player1 = document.querySelector(`#current--0`);
let score1 = document.querySelector(`#score--0`);
let score2 = document.querySelector(`#score--1`);

let player2 = document.querySelector(`#current--1`);
let player = player1;

const newGame = function() {
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    player = player1;
    for (let i = 0; i < 6; i++) {
        dice[i].classList.add('hidden');
    }
};

function winner() {
    if (score1.textContent >= 100) {
        prompt(`Player 1 Won!`);
        newGame();
    } else if (score2.textContent >= 100) {
        prompt(`Player 2 Won!`);
        newGame();
    }
}

function holdButton() {
    //function to add values to main score if hold is pressed and changing player's turn
    document.querySelector(`.btn--hold`).addEventListener('click', function() {
        if (player == player1) {
            score1.textContent =
                Number(score1.textContent) + Number(player1.textContent);
            player1.textContent = 0;
            player = player2;
        } else if (player == player2) {
            score2.textContent =
                Number(score2.textContent) + Number(player2.textContent);
            player2.textContent = 0;
            player = player1;
        }
        winner();
    });
}

function rollDiceButton() {
    let random = 0;
    // random for changing dice pictures
    let newRandom = 0;
    document.querySelector(`.btn--roll`).addEventListener('click', function() {
        //hiding dice picture if the next random number is different so that new dice picture is showed
        if (random !== newRandom) {
            dice[newRandom].classList.add('hidden');
        }
        random = Math.trunc(Math.random() * 6) + 1;
        newRandom = Number(random - 1);
        dice[newRandom].classList.remove('hidden');
        //if 1 vvalue comes score become 0 shifting player turns
        if (random === 1) {
            player.textContent = 0;
            if (player == player1) {
                player = player2;
            } else if (player == player2) {
                player = player1;
            }
        } else {
            player.textContent = Number(player.textContent) + Number(random);
        }
    });
}
rollDiceButton();
holdButton();
document.querySelector(`.btn--new`).addEventListener('click', newGame);