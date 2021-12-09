/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (53.94%)
 * Likes:    230
 * Dislikes: 0
 * Total Accepted:    113.2K
 * Total Submissions: 209.8K
 * Testcase Example:  '"hello"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 * 
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "hello"
 * 输出："holle"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "leetcode"
 * 输出："leotcede"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const arr = s.split('')
  const temp = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
  let l = 0
  let r = arr.length - 1
  while(l<r){
    while(!temp.includes(arr[l]) && l < r) l++
    while(!temp.includes(arr[r]) && l < r) r--
    const t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
    l++
    r--
  }
  return arr.join('')
};
// @lc code=end

