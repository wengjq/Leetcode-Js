/*Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    
    var m = matrix.length;
    var n = matrix[0].length;
    var res = [];
    var up = 0, down = m - 1, left = 0, right = n - 1;
    while (true) {
        for (var j = left; j <= right; ++j) res.push(matrix[up][j]);
        if (++up > down) break;
        
        for (var i = up; i <= down; ++i) res.push(matrix[i][right]);
        if (--right < left) break;
        
        for (var j = right; j >= left; --j) res.push(matrix[down][j]);
        if (--down < up) break;
        
        for (var i = down; i >= up; --i) res.push(matrix[i][left]);
        if (++left > right) break;
    }
    
    return res;
};
