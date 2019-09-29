/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var n = nums.length, left = 0, right = n - 1;
    
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        
        if (nums[mid] == target) return true;
        if (nums[mid] < nums[right]) {
            if (nums[mid] < target && nums[right] >= target) left = mid + 1;
            else right = mid - 1;
        } else if (nums[mid] > nums[right]){
            if (nums[left] <= target && nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        } else --right;
    }
    return false;
};
