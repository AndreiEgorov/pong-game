// import Name from './partials/Setup';
import './styles/game.css';
import Game from './partials/Game';











// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);//recursion
})();








let nameDiv = document.createElement('div');
nameDiv.setAttribute('id', 'playersNames');
let wrapper1 = document.getElementById('wrapper');
wrapper1.appendChild(nameDiv);
document.getElementById('playersNames').style.display = 'flex';
document.getElementById('playersNames').style.justifyContent = "space-between";

// ------------
let name1 = document.createElement('p');
let nickname1 = document.createTextNode(prompt("Player 1 name"));
name1.appendChild(nickname1);

nameDiv.appendChild(name1)
// --------------

// ------------

let name2 = document.createElement('p');
let nickname2 = document.createTextNode(prompt("Player 2 name"));
name2.appendChild(nickname2);

nameDiv.appendChild(name2)
// ----------------








