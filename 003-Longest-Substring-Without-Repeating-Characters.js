
/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Difficulty:Medium
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
// 每当加到一个新字符串的时候，左边检查有无重复的字符串，
// 如果没有重复的就正常添加，
// 有重复的话就左边扔掉一部分（从最左到重复字符串这段扔掉），在这个过程中记录最大的字符串长度
var lengthOfLongestSubstring = function (s) {
    if (typeof s != 'string' || !s.length) return 0;

    var map = {};
    var leftBound = 0;
    var max = 0;

    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        leftBound = Math.max(leftBound, (typeof map[item] != 'undefined') ? map[item] + 1 : 0);
        max = Math.max(max, i - leftBound + 1);
        map[item] = i;
    };

    return max;
};
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
