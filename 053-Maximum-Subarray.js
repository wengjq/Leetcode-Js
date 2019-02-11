/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * Difficulty:Easy
 *
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

 /*
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var maxSubArray = function (nums) {
    var dp = [];
    var max = dp[0] = nums[0];

    for (var i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(dp[i], max);
    }

    return max;
};


// 分治法，把数组一分为二，分别找出左边和右边的最大子数组之和，然后还要从中间开始向左右分别扫描，求出的最大值分别和左右两边得出的最大值相比较取最大的那一个个
var maxSubArray = function (nums) {
	if (!nums.length) return 0;

	return helper(nums, 0, nums.length - 1);
}

function helper(nums, left, right) {
	if (left >= right) return nums[left];

    var mid = Math.floor(left + (right - left) / 2);
    var lmax = helper(nums, left, mid - 1);
    var rmax = helper(nums, mid + 1, right);
    var mmax = nums[mid];
    var t = mmax;

    for (var i = mid - 1; i >= left; --i) {
        t += nums[i];
        mmax = Math.max(mmax, t);
    }

    t = mmax;

    for (var i = mid + 1; i <= right; ++i) {
        t += nums[i];
        mmax = Math.max(mmax, t);
    }

    return Math.max(mmax, Math.max(lmax, rmax));
}
