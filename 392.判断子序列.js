/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 *
 * https://leetcode-cn.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (51.62%)
 * Likes:    573
 * Dislikes: 0
 * Total Accepted:    163.7K
 * Total Submissions: 316.4K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 
 * 进阶：
 * 
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 致谢：
 * 
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * 两个字符串都只由小写字符组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 双指针
// 时间复杂度 对于每个 s O(m+n)

// var isSubsequence = function(s, t) {
//   let sl = 0
//   let tl = 0
//   while(tl < t.length && sl < s.length){
//     if(t[tl] === s[sl]){
//       sl++
//     }
//     tl++
//   }
//   return sl === s.length
// };

// 贪心

// var isSubsequence = function(s, t){
//   let ind = -1
//   for(let i = 0; i<s.length; i++){
//     ind = t.indexOf(s[i], ind + 1)
//     if(ind === -1) return false
//   }
//   return true
// }

// 进阶 需要用到动态规划
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿
// 时间复杂度 对于每个 s O(m×∣Σ∣+n)
// https://www.cnblogs.com/arknights/articles/13387155.html

var isSubsequence = function(s, t){

  // 对字符串 t 预处理

  const tn = t.length
  const sn = s.length

  let dp = new Array(tn + 1).fill(0).map(() => new Array(26).fill(0))

  
  for(let i = 0; i<dp[tn].length; i++){
    dp[tn][i] = tn
  }

  for(let i = tn - 1; i>=0; i--){
    for(let j = 0; j<26; j++){
      dp[i][j] = t[i].charCodeAt() - 97 === j ? i : dp[i+1][j]
    }
  }

  let ind = 0

  for(let i = 0; i<sn; i++){
      if(dp[ind][s[i].charCodeAt() - 97] === tn) return false
      ind = dp[ind][s[i].charCodeAt() - 97] + 1
  }

  return true
}
// @lc code=end

