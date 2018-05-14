// import Name from './partials/Setup';
import './styles/game.css';
import Game from './partials/Game';
import { setInterval } from 'timers';











// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
    if (game.ended) {
        alert("Game Over!");
    }
    else {
        game.render();
        requestAnimationFrame(gameLoop);//recursion
    }


})();








let nameDiv = document.createElement('div');
nameDiv.setAttribute('id', 'playersNames');
let wrapper1 = document.getElementById('wrapper');
wrapper1.appendChild(nameDiv);
document.getElementById('playersNames').style.display = 'flex';
document.getElementById('playersNames').style.justifyContent = "space-between";

// ------------
let name1 = document.createElement('p');
let nickname1 = (prompt("Player 1 name"));
name1.appendChild(document.createTextNode(nickname1));

nameDiv.appendChild(name1)
// --------------

// ------------

let name2 = document.createElement('p');
let nickname2 = prompt("Player 2 name");
name2.appendChild(document.createTextNode(nickname2));

nameDiv.appendChild(name2)
// ----------------

//______________Set play time_________

let counter = Number(prompt("How many minutes would you like to play?"));

if (counter == 1) {
    counter = 60;
}
else if (counter == 2) {
    counter == 120;
}
else if (counter == 3) {
    counter == 180
}
else {
    counter = Number(prompt("Please, pick a valid number from 1 to 3."));
}

let pong = document.getElementById('pong');
let timerbox = document.createElement('p');
timerbox.setAttribute('id', 'timerbox');
pong.appendChild(timerbox);




let countdown = document.getElementById('timerbox');

let timerID = 0;
timerID = setInterval(function () {
    displayWinner();

}, 1000);
function displayWinner() {
    counter -= 1;
    countdown.innerHTML = counter;

    if (counter <= 0) {
        let playerOneScore = game.player1.score;
        let playerTwoScore = game.player2.score;

        if (playerOneScore > playerTwoScore) {

            alert(`${nickname1} wins!`);
        }
        else if (playerOneScore < playerTwoScore) {
            alert(`${nickname2} wins!`);

        } else {
            alert("It's a Draw!");
        }

        stopInterval();
        game.stop();
    }
}
function stopInterval() {


    clearInterval(timerID._id);
}






