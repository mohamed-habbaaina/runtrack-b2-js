export default class Player {
    constructor(symbol, isCurrentPlayer) {
        this.symbol = symbol; // 'X' ou 'O'
        this.isCurrentPlayer = isCurrentPlayer; // true ou false
    }
}