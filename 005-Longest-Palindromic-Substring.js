/**
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * Difficulty:Medium
 *
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 */
// return the Longest Palindromic Substring of s
function Manacher(s) {
  var str = '#', 
    dp = [], 
    maxn = 0, 
    idx = 0;

  for (var i = 0, len = s.length; i < len; i++)
    str += s[i] + '#';

  for (var i = 0, len = str.length; i < len; i++) {
    if (maxn > i) dp[i] = Math.min(dp[2 * idx - i], maxn - i);
    else dp[i] = 1;

    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++;

    if (dp[i] + i > maxn)
      maxn = dp[i] + i, idx = i;
  }

  var ans = 0, 
    pos;

  for (var i = 0; i < len; i++) {
    if (dp[i] > ans)
      ans = dp[i], pos = i;
  }

  var f = str[pos] === '#', 
    tmp = f ? '' : str[pos],
    startPos = f ? pos + 1 : pos + 2, 
    endPos = f ? dp[pos] - 3 + startPos : dp[pos] - 4 + startPos;

  for (var i = startPos; i <= endPos; i += 2) 
    tmp = str[i] + tmp + str[i];

  return tmp;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (typeof s != 'string' || !s.length) return s;

  var str = Manacher(s);
  return str;
};

console.log(longestPalindrome('babcbade')); // abcba
