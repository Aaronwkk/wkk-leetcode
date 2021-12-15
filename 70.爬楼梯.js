/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (53.13%)
 * Likes:    2067
 * Dislikes: 0
 * Total Accepted:    639.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// var climbStairs = function(n) {
//   const cache = [0, 1, 2]
//   for(let i = 3; i<=n; i++){
//     cache[i] = cache[i-1] + cache[i-2]
//   }
//   return cache[n]
// };

//  var climbStairs = function(n) {
//   const cache = [0, 1, 2]
//   const f = function(x){
//     if(cache[x]) return cache[x]
//     cache[x] = f(x-1) + f(x-2)
//     return cache[x]
//   }
//   return f(n)
// };


// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n<=2) return n
  let t = 0
  let l1 = 1
  let l2 = 2
  for(let i = 3; i<=n; i++){
    t = l1
    l1 = l2
    l2 = t + l2
  }
  return l2
};
// @lc code=end

