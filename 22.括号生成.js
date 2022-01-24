/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.29%)
 * Likes:    2258
 * Dislikes: 0
 * Total Accepted:    399.9K
 * Total Submissions: 517.4K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = new Array()
  const dfs = function(cur, max, open, close){
    if(cur.length === max * 2){
      ans.push(cur.join(''))
      return
    }
    if(open < max){
      cur.push('(')
      dfs(cur, max, open+1, close)
      cur.pop()
    }
    if(close < open){
      cur.push(')')
      dfs(cur, max, open, close+1)
      cur.pop()
    }
  }
  dfs([], n, 0, 0)
  return ans
};
// @lc code=end

