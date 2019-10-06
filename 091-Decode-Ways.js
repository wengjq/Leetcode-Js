/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s.length || s[0] == '0') return 0;

  var dp = [];
  dp[0] = 1;

  for (var i = 1; i < s.length + 1; ++i) {
    dp[i] = (s[i - 1] == '0') ? 0 : dp[i - 1];
    if (i > 1 && (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] <= '6'))) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[dp.length - 1];
};
