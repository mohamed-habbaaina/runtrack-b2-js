import Board from './class/Board.js';
import Player from './class/Player.js';
// import "./style.css";

const board = document.getElementById('board');

const player1 = new Player('X', true);
const player2 = new Player('O', false);
const jeux = new Board()

console.log(player1.symbol); // 'X'
console.log(player2.isCurrentPlayer); // false
