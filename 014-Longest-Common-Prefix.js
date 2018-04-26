/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Difficulty:Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 
 var longestCommonPrefix = function(strs) {
	var length = strs.length;

	if (!length) return "";

    var prefixLength = 0;
    var hash = {};
    var i = 0;

    while (i < length) {
    	hash[strs[i].charAt(prefixLength)] = i;
    	
        if (i === length - 1) {
        	if (Object.keys(hash).length === 1) {
        		prefixLength++;
        		i = 0;
                hash = {};
                continue;
        	} else {
                break;
            }
        }

        i++;
    }

	return strs[0].slice(0, prefixLength);
};

console.log(longestCommonPrefix(['abdc', 'abc123', 'abc234'])); // ab
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
