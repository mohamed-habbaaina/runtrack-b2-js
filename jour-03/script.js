import Player from './class/Player.js';


const player1 = new Player('X', true);
const player2 = new Player('O', false);

console.log(player1.symbol); // 'X'
console.log(player2.isCurrentPlayer); // false
