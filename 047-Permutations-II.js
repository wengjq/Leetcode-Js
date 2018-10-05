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

// 解法二
var permuteUnique2 = function (nums) {
    var res = [];
    var temp = [];
    var used = [];

    nums.sort((b, a) => b - a);
    
    permuteUnique2dfs(res, temp, nums, used);

    return res;
};

function permuteUnique2dfs(res, temp, nums, used) {
    if (nums.length === temp.length) {
        return res.push(temp.slice());
    }

    for (var i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

        used[i] = true;
        temp.push(nums[i]);
        permuteUnique2dfs(res, temp, nums, used);

        used[i] = false;
        temp.length -= 1;        
    }
}

console.log(permute2([2,2,1,1]))
