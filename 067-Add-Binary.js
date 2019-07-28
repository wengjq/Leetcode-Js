/*给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var res = "";
  var carry = 0;
  var i = a.length - 1;
  var j = b.length - 1;

  while (i >= 0 || j >= 0 || carry == 1) {
    var sum = carry;
    if (i >= 0) sum += Number(a[i--]);

    if (j >= 0) sum += Number(b[j--]);

    res = String(sum % 2) + res;

    carry = Math.floor(sum / 2);
  }

  return res;   
};
