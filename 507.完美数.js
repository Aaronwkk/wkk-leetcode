/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 *
 * https://leetcode-cn.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (41.88%)
 * Likes:    138
 * Dislikes: 0
 * Total Accepted:    49K
 * Total Submissions: 104.6K
 * Testcase Example:  '28'
 *
 * 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。
 * 
 * 给定一个 整数 n， 如果是完美数，返回 true，否则返回 false
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 28
 * 输出：true
 * 解释：28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, 和 14 是 28 的所有正因子。
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 6
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num = 496
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：num = 8128
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：num = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num <= 10^8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if(num <= 1) return false
  let sum = 0
  const n = Math.ceil(num/2)
  for(let i = 1; i<=n; i++){
    if(num%i === 0){
      sum+=i
    }
  }
  return sum === num
};
// @lc code=end

