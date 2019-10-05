/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  var res = [];
    
  for (var i = 0; i < Math.pow(2,n); ++i) {
    res.push((i >> 1) ^ i);
  }
    
  return res;  
};
