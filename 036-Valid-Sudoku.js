/**
 * https://leetcode.com/problems/valid-sudoku/description/
 * Difficulty:Medium
 *
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * A partially filled sudoku which is valid.
 * Note:
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 *
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 
 var isValidSudoku = function (board) {
    for (var i = 0; i < 9; i++) {
        var rowNums = [];
        var colNums = [];
        var cubeNums = [];

        for (var j = 0; j < 9; j++) {
            var ch = board[i][j];
            if (ch !== '.') {
                if (rowNums.indexOf(ch) > -1) return false;
                rowNums.push(ch);
            }

            ch = board[j][i];
            if (ch !== '.') {
                if (colNums.indexOf(ch) > -1) return false;
                colNums.push(ch);
            }

            var row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            var col = i % 3 * 3 + j % 3;
            
            ch = board[row][col];
            if (ch !== '.') {
                if (cubeNums.indexOf(ch) > -1) return false;
                cubeNums.push(ch);
            }
        }
    }
    return true;
};
