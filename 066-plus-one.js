/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var value = 1;
  var len = digits.length;

  for (var i = len - 1; i >= 0; i--) {
      var temp = digits[i] + value;
      digits[i] = temp % 10;
      value = Math.floor(temp / 10);
  }

  if (value == 1) {
    digits.unshift(1);
  }            

  return digits;
}
