/*
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length || !board[0].length) return false;

  var m = board.length, n = board[0].length;

  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (search(board, word, 0, i, j)) return true;
    }
  }

  return false; 
};

function search(board, word, idx, i, j) {
  if (idx == word.length) return true;

  var m = board.length, n = board[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] != word[idx]) return false;    

  var c = board[i][j];

  board[i][j] = '#';
  var res = search(board, word, idx + 1, i - 1, j) 
           || search(board, word, idx + 1, i + 1, j)
           || search(board, word, idx + 1, i, j - 1)
           || search(board, word, idx + 1, i, j + 1);

  board[i][j] = c;

  return res;
}
