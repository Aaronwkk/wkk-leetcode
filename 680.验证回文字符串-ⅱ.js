/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (40.14%)
 * Likes:    428
 * Dislikes: 0
 * Total Accepted:    92.3K
 * Total Submissions: 230K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "aba"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abca"
 * 输出: true
 * 解释: 你可以删除c字符。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "abc"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s, left, right){
  let l = left
  let r = right
  while(l<=r){
    if(s[l++] !== s[r--]) return false
  }
  return true
}

var validPalindrome = function(s) {
  let l = 0
  let r = s.length - 1
  while(l<=r){
    if(s[l++] !== s[r--]) {
        return isPalindrome(s, l-1, r) || isPalindrome(s, l, r+1)
    }
  }
  return true
};
// @lc code=end

