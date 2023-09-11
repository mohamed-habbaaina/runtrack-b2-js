export default class Board {
    
    constructor() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.hasWinner = false;
        this.currentPlayer = 'X';
        this.turn = 1;
        this.boardElement = document.getElementById('board');
        this.messageElement = document.getElementById('message');
        this.turnElement = document.getElementById('turn');
        this.playButton = document.getElementById('play');

        // Ajoutez un gestionnaire d'événements au bouton de jeu
        this.playButton.addEventListener('click', () => {
        // Initialisez le plateau lorsque le bouton est cliqué
        this.initializeBoard();
        });
    }
     initializeBoard() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.hasWinner = false;
        this.currentPlayer = 'X'; // Réinitialisez le joueur actuel
        this.turn = 1; // Réinitialisez le tour
        this.displayBoard();
        this.messageElement.textContent = "Commencez la partie !";
        this.turnElement.textContent = "Tour : 1";
        this.messageElement.classList.remove('message-win');
        this.messageElement.classList.remove('message-draw');

    }
    
    

    displayBoard() {
        this.boardElement.innerHTML = '';

        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';

            for (let col = 0; col < 3; col++) {
                const btn = document.createElement('button');
                btn.className = 'case';
                btn.id = `btn-${row}-${col}`;
                btn.textContent = this.grid[row][col];

                // Ajoutez un gestionnaire d'événements aux boutons du plateau
                btn.addEventListener('click', () => {
                    this.placeMove(row, col);
                });

                rowDiv.appendChild(btn);
            }

            this.boardElement.appendChild(rowDiv);
        }
    }

    placeMove(row, col) {
        if (this.grid[row][col] === '-' && !this.hasWinner) {
            this.grid[row][col] = this.currentPlayer;
            this.displayBoard();
            this.turn++;

            // Vérifiez si quelqu'un a gagné après chaque coup
            if (this.checkVictory()) {
                this.messageElement.textContent = `Le joueur ${this.currentPlayer} a gagné !`;
                this.messageElement.classList.add('message-win'); // Ajoutez la classe pour le message de victoire
                this.hasWinner = true;
            } else if (this.isFull()) {
                this.messageElement.textContent = "Match nul !";
                this.messageElement.classList.add('message-draw'); // Ajoutez la classe pour le message d'égalité
            } else {
                // Changez de joueur pour le tour suivant
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                this.messageElement.textContent = `C'est au tour du joueur ${this.currentPlayer}`;
                this.turnElement.textContent = `Tour : ${this.turn}`;
            }
        }
    }

    checkVictory() {
        // Vérifiez les rangées horizontales
        for (let row = 0; row < 3; row++) {
            if (this.grid[row][0] !== '-' && this.grid[row][0] === this.grid[row][1] && this.grid[row][0] === this.grid[row][2]) {
                return true;
            }
        }
    
        // Vérifiez les rangées verticales
        for (let col = 0; col < 3; col++) {
            if (this.grid[0][col] !== '-' && this.grid[0][col] === this.grid[1][col] && this.grid[0][col] === this.grid[2][col]) {
                return true;
            }
        }
    
        // Vérifiez la diagonale de gauche à droite
        if (this.grid[0][0] !== '-' && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            return true;
        }
    
        // Vérifiez la diagonale de droite à gauche
        if (this.grid[0][2] !== '-' && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            return true;
        }
    
        return false;
    }
    

    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.grid[row][col] === '-') {
                    return false;
                }
            }
        }
        return true;
    }

    resetBoard() {
        this.initializeBoard();
    }
}

