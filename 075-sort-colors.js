/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // 计数排序
 var sortColors = function(nums) {
	var colors = [0, 0, 0];

    for (var num of nums) {
    	colors[num] = colors[num] + 1;
    }

    for (var i = 0, cur = 0; i < 3; ++i) {
        for (var j = 0; j < colors[i]; ++j) {
            nums[cur++] = i;
        }
    }

    return nums;
};

// 双指针
var sortColors1 = function(nums) {
    var left = 0, right = nums.length - 1;

    for (var i = 0; i <= right; ++i) {
        if (nums[i] == 0) {
        	swap(nums, i, left);
        	left++;
        } else if (nums[i] == 2) {
        	swap(nums, i, right);
        	i--;
        	right--;
        } 
    }

    return nums;
};

function swap(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}
