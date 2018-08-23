/**
 * https://leetcode.com/problems/generate-parentheses/description/
 * Difficulty:Medium
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 
 var generateParenthesis = function (n) {
    var ans = [];
    
    dfs(ans, '', 0, 0, n);
    
    return ans;
};

function dfs(ans, str, left, right, n) {
    if (right === n) ans.push(str);
    
    if (left < n) {
        dfs(ans, str + '(', left + 1, right, n);
    }
    
    if (right < left) {
        dfs(ans, str + ')', left, right + 1, n);
    }
}

console.log(generateParenthesis(3));
