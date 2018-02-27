/**
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty:Easy
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  	if (nums.length < 2 || typeof target !== "number") {
  		return new Error("arguments error");
  	}

	for (var i = 0; i < nums.length; i++) {
	  	for (var j = i + 1; j < nums.length; j++) {
	    	if (nums[i] + nums[j] == target) {
	    		return [i, j];
	    	}
	  	}
	}
};

var twoSum2 = function (nums, target) {
	if (nums.length < 2 || typeof target !== "number") {
  		return new Error("arguments error");
    }

    var map = {};

    for (var i = 0; i < nums.length; i++) {
	    var n = nums[i];

	    if (map[target - n] !== undefined) {
	        return [map[target - n], i];
	    } else {
	        map[n] = i;
	    }
  }
};

var twoSum3 = function (nums, target) {
	if (nums.length < 2 || typeof target !== "number") {
  		return new Error("arguments error");
    }

	for (var i = 0; i < nums.length; i++) {
		var j = nums.indexOf(target - nums[i], i + 1);

		if (j > -1 && j != i) {
			return [i, j];
		}
	}
};

console.log(twoSum([1,3,5,22], 27)); // [2, 3]
console.log(twoSum2([1,3,5,22], 27)); // [2, 3]
console.log(twoSum3([1,3,5,22], 27)); // [2, 3]
