# Pong Game

A basic pong game using SVGs. Put your and your opponent's name in a prompt window. Pick how many minutes you want to play and start the game. The winner is the one who has more points when the time runs out.
There are three balls in a game; two grey and one red.
Your goal is to defend your side of the board and not let the red ball throught and to score a goal while avoiding the grey balls, which take one point off what you earned each time they hit your paddle.  

## Setup

**Game features
 1) Players can put their names/nicknames to be displayed on a gaming board
 2) Players can pick a time for the match.
 3) The game features a coutdown timer that limits length of a match to a chosen amount of time. (1 to 3 mitutes)
 4) Once time runs out, the game announces a winner.
 5) The game also features two "Boulder" balls that take away a score away from a player upon a collision with the player's paddle, which makes winning the game a bit more difficult. 


**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

** Personal Learnings
The Pong game was an excellent project that allows learning more about OOP or (Object Oriented Programming). Working on Pong gave me an opportunity to learn more about classes and organization of the project. 

Most of the elements you can see on a page are SVG. Unlike other image formags, SVG can be used to display images that need to be scaled on a webpage and thus, regardless of how much a page is zoomed in an SVG image will always remain high quality.

Webpack is another highlight of this porject. Webpack is a module bundler that helps developers generate static assests out of dynamic dependencies and modules.