import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.ping = new Audio("public/sounds/pong-01.wav");
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = Math.random() * 10 - 6; //to make the ball move in both directions at a start
        this.reset();

    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    // Paddle Collision

    paddleCollision(player1, player2) {
        if (this.vx > 0) {
            //detect player2 paddle collision
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;

            //Checking if the ball is >= left edge of the paddle
            if (
                (this.x + this.radius >= leftX) &&
                (this.x + this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.ping.play();
            }

        } else {
            //...
        }
        if (this.vx < 0) {
            //detect player2 paddle collision
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle;

            //Checking if the ball is >= left edge of the paddle
            if (
                (this.x - this.radius >= leftX) &&
                (this.x - this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.ping.play(); //to play sound
            }

        } else {
            //...
        }




    }
    //___________

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        if (hitLeft || hitRight) {
            this.vx *= -1;
        }
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;
        if (hitBottom || hitTop) {
            this.vy *= -1;
        }

    }

    // Make score Part 1/2
    goal(player) {
        player.score++;
        this.reset();
        console.log(player.score)

    }
    // ______________________





    render(svg, player1, player2) {



        this.x += this.vx;
        this.y += this.vy;


        this.paddleCollision(player1, player2);
        this.wallCollision();



        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'white');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', (this.x));
        circle.setAttributeNS(null, 'cy', (this.y)); //changed from this.boardHeight / 2

        svg.appendChild(circle);

        // Make score Part 1/2
        // Detect goal
        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(player1);
            this.direction = -1;
        }
        else if (leftGoal) {
            this.goal(player2);
            this.direction = 1;

        }

    }



}