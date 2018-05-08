// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//  [-1, 0, 1],
//  [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums.length) return;

  nums.sort((a, b) => a - b);

  let ans = [];
  let len = nums.length;

  for (let i = 0; i < len; i++ ) { 

    // 如果有重复跳过
    if (i && nums[i] === nums[i - 1]) continue;

    // 另外两个的总和
    let target = -nums[i];

    // 另外两个的索引
    let [start, end] = [i + 1, len - 1];

    while (start < end) {
      let sum = nums[start] + nums[end];

      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        ans.push([nums[i], nums[start], nums[end]]);
        
        // 删除重复
        while (nums[start] === nums[start + 1]) 
          start++;
        start++;

        // 删除重复
        while (nums[end] === nums[end - 1])
          end--;
        end--;
      }
    }
  }

  return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
