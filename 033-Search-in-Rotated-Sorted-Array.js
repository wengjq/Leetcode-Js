/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * Difficulty:Medium
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var search = function(nums, target) {
    if (!nums.length) return -1;
    
    var low = 0;
    var high = nums.length - 1;
    
    while (low <= high) {
        var mid = (high + low) / 2;
        
        if (target < nums[mid]) {
            if (nums[mid] < nums[high]) { // 右侧排好序了
                high = mid - 1;
            } else { // 左侧排好序了
                if (target < nums[low]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        } else if (target > nums[mid]) {
            if (nums[mid] > nums[low]) { // 左侧排好序了
                low = mid + 1;
            } else { // 右侧排好序了
                if (target > nums[high]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        } else {
            return mid;
        }
    }
    
    return -1;
};

