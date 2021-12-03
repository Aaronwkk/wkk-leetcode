/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//   const n = grid.length
//   const m = grid[0].length
//   const memo = new Array(n).fill(0).map(() => new Array(m).fill(0))

//   const dp = function(y, x){

//     if(y === 0 && x === 0) return grid[y][x]
//     if(y < 0 || x < 0) return Infinity

//     if(memo[y][x] >0 ) return memo[y][x]

//     memo[y][x] = Math.min(dp(y, x-1), dp(y-1, x)) + grid[y][x]

//     return memo[y][x]
//   }
//   return dp(n-1, m-1)
  
// };

// var minPathSum = function(grid){
//   const n = grid.length
//   const m = grid[0].length
//   const memo = new Array(n).fill(0).map(() => new Array(m).fill(0))

//   for(var y = 0; y<n; y++){
//     for(var x = 0; x<m; x++){
//         if(x === 0 && y === 0) {
//           memo[y][x] = grid[y][x]
//         }else if(x === 0){
//           memo[y][x] = memo[y-1][x] + grid[y][x]
//         } else if(y === 0) {
//           memo[y][x] = memo[y][x-1] + grid[y][x]
//         } else {
//           memo[y][x] = Math.min(memo[y-1][x], memo[y][x-1]) + grid[y][x]
//         }
//     }
//   }

//   return memo[n-1][m-1]
// }

function minPathSum(grid) {
  if (grid.length == 0 || grid[0].length == 0) {
      return 0;
  }
  const m = grid.length, n = grid[0].length;
  const dp = new Array()
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (j == 0) {
              dp[j] = dp[j];        // 只能从上侧走到该位置
          } else if (i == 0) {
              dp[j] = dp[j - 1];    // 只能从左侧走到该位置
          } else {
              dp[j] = Math.min(dp[j - 1], dp[j]);
          }
          dp[j] += grid[i][j];
      }
  }
  return dp[n - 1];
}


// @lc code=end

