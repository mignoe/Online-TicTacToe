class tic_tac_toe {
    board = ['','','','','','','','',''];
    symbols = {
        letters:  ['X', 'O'],
        playerTurn: 0,

        changeTurn: function () {
            this.playerTurn = this.playerTurn == 0 ? 1 : 0
        },

        getCurrent: function () {
            return this.letters[this.playerTurn];
        }

    };

    winning_sequences = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    container_element = null;
    game_over = false;

    init = function (container) {
        this.container_element = container;
    };

    play = function (pos) {
        if (this.board[pos] == "" && !this.game_over) {
            this.board[pos] = this.symbols.getCurrent();
            this.checkWinner(this.symbols.getCurrent());
            this.symbols.changeTurn();
        }
        
        this.draw();
    };

    checkWinner = function (player) {
        for ( i in this.winning_sequences ) {
            if (this.board[ this.winning_sequences[i][0] ] == player  &&
                this.board[ this.winning_sequences[i][1] ] == player &&
                this.board[ this.winning_sequences[i][2] ] == player) {
                console.log('winning sequences INDEX:' + i);
                this.game_over = true;
                alert("player: " + this.symbols.getCurrent() + " won!" )
                return;
            }
        } 
        
        if (!this.board.includes("")) {
            this.game_over = true;
            alert("Draw!")
        }
    };

    draw = function () {
        content = "";
        for (i = 0; i < this.board.length; i++) {
            content += "<div class = 'GameCell' onclick='tic_tac_toe.play(" + i  + ")'>" + this.board[i] + "</div>"
        }

        this.container_element.innerHTML = content;
    }
}

module.exports = { tic_tac_toe }