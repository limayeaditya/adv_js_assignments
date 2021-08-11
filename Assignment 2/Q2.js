class Queens {
    constructor({white, black} = {white: [0,3], black: [7,3]}) {
        this.white = white;
        this.black = black;

        if(white[0] === black[0] && white[1] === black[1]) {
            throw 'Queens cannot share the same cell';
        }

        this.board = [...Array(8)].map(r => Array(8).fill('_'));
        this.board[white[0]][white[1]] = 'W';
        this.board[black[0]][black[1]] = 'B';
    }

    canAttack() {
        let dx = this.white[0] - this.black[0];
        let dy = this.white[1] - this.black[1];
        return !dx || !dy || dx*dx === dy*dy;
    }

    toString() {
        return this.board.map(r => r.join(' ')).join('\n') + '\n';
    }
}

module.exports = Queens;