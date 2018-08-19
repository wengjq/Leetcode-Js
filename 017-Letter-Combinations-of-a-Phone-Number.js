/**
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * Difficulty:Medium
 *
 * Given a digit string, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 //  depth-first-search 深度优先搜索
 var ans, tmp;

function dfs(str, idx, digits) {
  if (idx === digits.length) {
    ans.push(str);
    return;
  }

  var num = Number(digits[idx]);
  if (num <= 1)
    dfs(str, idx + 1, digits);
  else {
    for (var i = 0, len = tmp[num].length; i < len; i++)
      dfs(str + tmp[num][i], idx + 1, digits);
  }
}

var letterCombinations = function(digits) {
  if (!digits.length)
    return [];

  tmp = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
  ans = [];

  dfs('', 0, digits);
  return ans;
};
