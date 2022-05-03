/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.84%)
 * Likes:    911
 * Dislikes: 0
 * Total Accepted:    220K
 * Total Submissions: 490.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let ans = 0
  
  for(let i = len2 - 1; i>=0; i--){

    let sum = 0
    let other = 0

    for(let j = len1 - 1; j>=0; j--){

      const t = num1[j]*num2[i]
      const c = t%10 + other
      other = Math.floor(t / 10)
      sum = c * 10 + sum
      console.log(sum)
    }
  }
  return ans
};
// @lc code=end

