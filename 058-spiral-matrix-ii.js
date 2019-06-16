/*
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n.length === 0) return [];
    
    var res = [];
    var up = 0, down = n - 1, left = 0, right = n - 1;
    var k = 1;
    while (true) {
        for (var j = left; j <= right; ++j) {
            if (res[up] === undefined) res[up] = [];
            res[up][j] = k++;
        }
        if (++up > down) break;
        
        for (var i = up; i <= down; ++i) {
            if (res[i] === undefined) res[i] = [];
            res[i][right] = k++;
        }
        if (--right < left) break;
        
        for (var j = right; j >= left; --j) {
            if (res[down] === undefined) res[down] = [];
            res[down][j] = k++;
        }
        if (--down < up) break;
        
        for (var i = down; i >= up; --i) {
            if (res[i] === undefined) res[i] = [];
            res[i][left] = k++;
        }
        if (++left > right) break;
    }
    
    return res;
};
