/**
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 * Difficulty:Medium
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    var len = s.length;  
    var d = 2 * numRows - 2; // 两整列之间的下标差
    var result = '';  
  
    if (len == 0 || numRows == 0 || numRows == 1) return s;  
         
    // 从第一行遍历到最后一行     
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < len; j += d) {  
            var singleCharColumn =  j + d - 2 * i ;

            result += s.charAt(j); // 非单个字符列的字符  

            if (i != 0 && i != numRows - 1 &&  singleCharColumn < len) {
                result += s.charAt(singleCharColumn); // 单个字符列的字符  
            } 
        }  
    }   

    return result ;  
};
console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(convert('ABCDEFGHIjKLMNO', 5)); // AIBHjCGKODFLNEM
