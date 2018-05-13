
import Name from './Setup';
import Score from './Score'
import Ball from './Ball.js'
import Board from './Board.js' //may also not put ".js" in it
import Paddle from './Paddle.js'//
import { SVG_NS, KEYS } from "../settings";
export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;


		this.gameElement = document.getElementById(this.element);
		// Other code goes here...




		this.board = new Board(this.width, this.height); //instantiate board
		this.ball = new Ball(8, this.width, this.height);




		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;


		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'player1',

		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'player2',
		);

		this.score1 = new Score(this.width / 2 - 50, 30, 30);
		this.score2 = new Score(this.width / 2 + 25, 30, 30);

		//to pause the game_ Part1/2_______________
		this.pause = false;

		document.addEventListener("keydown", event => {
			if (event.key == KEYS.spaceBar) {
				this.pause = !this.pause;

			}
		});
		//________________




	}

	render() {

		//to pause the game__Part 2/2__________
		if (this.pause) {
			return;
		}
		//____________-

		// More code goes here...
		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, "svg");
		svg.setAttributeNS(null, "width", this.width);
		svg.setAttributeNS(null, "height", this.height);
		svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);

		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);

		this.ball.render(svg, this.player1, this.player2);

		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);


	}

}