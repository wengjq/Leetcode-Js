/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Difficulty:Hard
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 * *
 */
 
 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    if (!(Array.isArray(nums1) && Array.isArray(nums2)) || (nums1.length === 0 && nums2.length === 0)) return;

    var arr = nums1.concat(nums2);
    var median;
    var len;

    arr.sort(function(a, b) {
        return a - b;
    });

    len = arr.length;

    if (len % 2 === 0) {
        median = (arr[len / 2 - 1] + arr[len / 2]) / 2;
    } else {
        median = arr[Math.floor(len / 2)];
    }

    return median;
};
console.log(findMedianSortedArrays([2, 1, 5, 9], [3, 4, 7, 6])) // 4.5
