/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var ret = [];
    var board = [];
    for (var i = 0; i < n; i++) {
        board.push(new Array(n).fill('.'));
    }
    helper(board, 0, ret);
    return ret.length;
};

function helper(board, col, ret) {
    if (col === board.length) {
        ret.push(construct(board));
    } else {
        for (var i = 0; i < board.length; i++) {
            if (check(board, i, col)) {
                board[i][col] = 'Q';
                helper(board, col + 1, ret);
                board[i][col] = '.';
            }
        }
    }
}

function check(board, x, y) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < y; j++) {
            if (board[i][j] === 'Q' &&
                (i === x || i + j === x + y || i + y === j + x)) return false;
        }
    }
    return true;
}
function construct(board) {
    return board.map(arr => arr.join(''));
}
