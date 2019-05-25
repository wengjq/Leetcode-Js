/*
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var result = [];
    var len = intervals.length;
    
    intervals.sort(function (a, b) {
        return a[0] - b[0];
    });
    
    for (var i = 0; i < len; i++) {
        var n = result.length;
        // 情况1：当前区间与 result 中的区间无交集，直接将当前区间添加至 result
        if (n == 0 || result[n - 1][1] < intervals[i][0]) {
            result.push(intervals[i]);
        }
        // 情况2：当前区间与 result 中的区间有交集，修改 result 最后一个区间的 end
        else {
            result[n - 1][1] = Math.max(intervals[i][1], result[n - 1][1]);
        }
    }

    return result;
};
