/*
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var row = {}; // 标记该行是否存在0
  var col = {}; // 标记该列是否存在0

  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      if (matrix[i][j] == 0) {
          row[i] = col[j] = true;
      }
    }
  }

  for (var i = 0; i < m; ++i) {
    if (row[i]) {
      for (var j = 0; j < n; ++j) {
        matrix[i][j] = 0;
      }
    }
  }

  for (var j = 0; j < n; ++j) {
    if (col[j]) {
      for (var i = 0; i < m; ++i) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix; 
};
