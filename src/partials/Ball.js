import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = Math.random() * 10 - 6; //to make the ball move in both directions at a start
        this.reset()
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy = Math.floor(Math.random() * 10 - 5);   //to define direction and magnitude of the ball
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }


    render(svg, player1, player2) {

        this.x += this.vx;
        this.y += this.vy;


        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'white');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', (this.x));
        circle.setAttributeNS(null, 'cy', (this.y)); //changed from this.boardHeight / 2

        svg.appendChild(circle);

    }



}

