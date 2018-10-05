/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* 
思路：先以对角线为轴翻转得到其转置矩阵，再以中间竖轴翻转。
1  2  3　　　 　1  4  7　　　　 7  4  1

4  5  6　-->　  2  5  8　 -->   8  5  2　　
 
7  8  9 　　　   3  6  9　　     9  6  3
*/
var rotate = function(matrix) {
    var n = matrix.length;
         
    // along the left top to right bottom diagonal line, swap symmetrical pair
    for (var i = 0; i < n; i++) {  // for each row
        for (var j = i + 1; j < n; j++) {  // for each number
            // swap the pair
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // flip each row horizontally
    for (var i=0; i<n; i++) {
        for (var j=0; j < n / 2; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
};
