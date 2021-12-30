/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (69.92%)
 * Likes:    1460
 * Dislikes: 0
 * Total Accepted:    185.8K
 * Total Submissions: 265.6K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function(n){
  var cache = new Array(n+1)
  var dp = function(i){
    if(i <= 0) return 1
    if(i === 1) return 1
    if(cache[i] !== undefined) return cache[i]
    for(let j = 1; j<=i; j++){
      cache[i] = cache[i] ? cache[i] + dp(j-1) * dp(i-j):dp(j-1) * dp(i-j)
    }
    return cache[i]
  }
  return dp(n)
}

// var numTrees = function(n) {
//   const dp = new Array(n+1).fill(0)
//   dp[0] = 1
//   dp[1] = 1
//   for(let i = 2; i<=n; i++){
//     for(let j = 1; j <= i; j++){
//       dp[i] += dp[j-1] * dp[i-j]
//     }
//   }
//   return dp[n]
// };
// @lc code=end

