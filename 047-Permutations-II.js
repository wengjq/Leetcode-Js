/**
 * https://leetcode.com/problems/permutations-ii/description/
 * Difficulty:Medium
 *
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * For example,
 * [1,1,2] have the following unique permutations:
 *  [
 *  [1,1,2],
 *  [1,2,1],
 *  [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 var permuteUnique = function(nums) {
    var res = [];
    var used = [];

    nums.sort(function (a, b) {return a - b});

    permuteDfs(res, nums, 0, used);
    
    return res;   
};

function permuteDfs(res, nums, start, used) {
    if (start === nums.length - 1) {
        res.push(nums.slice());
    } else {
        for (var i = start; i < nums.length; i++) {
            if (hasDuplicate(nums, start, i)) continue;

            permuteSwap(nums, start, i);
            
            permuteDfs(res, nums, start + 1, used);

            permuteSwap(nums, start, i);
        }
    }
}

function hasDuplicate(nums, start, end) {  
    for(var i = start; i < end; i++) {  
        if (nums[i] == nums[end]) return true;  
    }  
    return false;  
} 

function permuteSwap(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}
