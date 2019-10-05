/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var res = [];
  
  nums.sort(function (a, b) { 
    return a - b;
  });

  subsetsWithDupDfs(res, [], nums, 0);

  return res;     
};

function subsetsWithDupDfs(res, tmp, nums, start) {
  res.push(tmp.slice());

  for (var i = start; i < nums.length; i++) {
    // 和上个数字相等就跳过
    if (i > start && nums[i] == nums[i - 1]) {
      continue;
    } 
    tmp.push(nums[i]);
    subsetsWithDupDfs(res, tmp, nums, i + 1);
    tmp.pop();
  }
}
