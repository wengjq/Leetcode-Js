/**
 * https://leetcode.com/problems/first-missing-positive/
 * Difficulty:Hard
 *
 * Given an unsorted integer array, find the first missing positive integer.
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 * Your algorithm should run in O(n) time and uses constant space.
 */

 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var n = nums.length;
    var i = 0;
   
    while (i < n) {
        var c = nums[i];
        // 交换的条件
        // 1、正数
        // 2、当前的数字与所对应的下标不相等
        // 3、不超过数组长度
        if (c > 0 && c !== i + 1 && nums[c - 1] !== nums[i] && c <= n) {
            console.log(11)
            swap(nums, c - 1, i);
        } else {
            i++;
        }
    }

    for (var i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    
    return n + 1;
};

function swap(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

 console.log(firstMissingPositive([1, 2, 0])); // 3
