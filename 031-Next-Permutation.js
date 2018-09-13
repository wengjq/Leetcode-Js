/**
 * https://leetcode.com/problems/next-permutation/description/
 * Difficulty:Medium
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place, do not allocate extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
	var len = nums.length;

	if (len < 2) return;

    for (var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--); // 从右往左找到第一个比右边小的数，记录其位置为 m;

	if (i === 0) {
    	reverse(0, nums.length - 1);
      	return;
 	}

 	for(var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++); // 再从右往左找到比 m 位置大的数中最小的一个，记录其位置为 n

 	swap(i - 1, j - 1); // 然后交换 m, n 位置的数
 	reverse(i, nums.length - 1); // 对 m 之后的位置，进行升序排列
     
    function reverse(start, end) {
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function swap(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}

var a = [1,5,3,6,4,2];
nextPermutation(a);
console.log(a); // [1, 5, 4, 2, 3, 6]
 
