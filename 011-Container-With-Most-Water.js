/**
 * https://leetcode.com/problems/container-with-most-water/description/
 * Difficulty:Medium
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container,
 * such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 
 var maxArea = function (height) {
    var i = 0;
    var j = height.length - 1;
    var max = 0;
    
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
          i++;
        }
        else {
          j--;
        }
    }
    return max;
};
