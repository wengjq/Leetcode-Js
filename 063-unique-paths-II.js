/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length || !obstacleGrid[0].length || obstacleGrid[0][0] == 1) return 0;

  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var dp = obstacleGrid;

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {dp[i][j] = 0; continue;}
      if (i == 0 && j == 0) {dp[i][j] = 1; continue;}
      if (i == 0 && j > 0) {dp[i][j] = dp[i][j - 1];continue;}
      if (j == 0 && i> 0) {dp[i][j] = dp[i - 1][j];continue;}
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
