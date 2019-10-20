/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var dp = new Array(n + 1);
  dp.fill(0);
  dp[0] = dp[1] = 1;
    
  for (var i = 2; i <= n; ++i) {
    for (var j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
    
  return dp[n];
};
