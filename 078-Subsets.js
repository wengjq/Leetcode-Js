/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var res = [];
  
  nums.sort(function (a, b) { 
    return a - b;
  });

  subsetsDfs(res, [], nums, 0);

  return res;    
};

function subsetsDfs(res, tmp, nums, start) {
  res.push(tmp.slice());

  for (var i = start; i < nums.length; i++) {
    tmp.push(nums[i]);
    subsetsDfs(res, tmp, nums, i + 1);
    tmp.pop();
  }
}
