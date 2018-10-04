/**
 * https://leetcode.com/problems/permutations/description/
 * Difficulty:Medium
 *
 * Given a collection of distinct numbers, return all possible permutations.
 * For example,
 * [1,2,3] have the following permutations:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];

    permuteDfs(res, nums, 0);
    
    return res;   
};

function permuteDfs(res, nums, start) {
    if (start === nums.length - 1) {
        res.push(nums.slice());
    } else {
        for (var i = start; i < nums.length; i++) {
            permuteSwap(nums, start, i);
            permuteDfs(res, nums, start + 1);
            permuteSwap(nums, start, i);
        }
    }
}

function permuteSwap(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}
