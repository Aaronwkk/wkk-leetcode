/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  let memo = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))

  memo[1][1] = 1

  for(var i = 1; i<=m; i++){
    for(var j = 1; j<=n; j++){
      if(obstacleGrid[i-1][j-1] === 1){
        memo[i][j] =  0
      }else{
        memo[i][j] += memo[i-1][j] + memo[i][j-1]
      }
    }
  }
  return memo[m][n]
};

const res = uniquePathsWithObstacles([[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]])

console.log(res)

// @lc code=end

