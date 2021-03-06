/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode-cn.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (65.74%)
 * Likes:    732
 * Dislikes: 0
 * Total Accepted:    133.9K
 * Total Submissions: 203.6K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 * 
 * 回文字符串 是正着读和倒过来读一样的字符串。
 * 
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var isPalindrome = function(s, left, right){
  let l = left
  let r = right
  let res = 0
  while(s[l] === s[r] && l>=0 && r<s.length){
    l--
    r++
    res++
  }
  return res
}
var countSubstrings = function(s) {
  let ans = 0
  for(let i = 0; i<s.length; i++){
    ans += isPalindrome(s, i, i)
    ans += isPalindrome(s, i-1, i)
  }
  return ans
};
// @lc code=end

