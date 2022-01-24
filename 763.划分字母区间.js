/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 *
 * https://leetcode-cn.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (76.30%)
 * Likes:    639
 * Dislikes: 0
 * Total Accepted:    92.5K
 * Total Submissions: 121.2K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：S = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca", "defegde", "hijhklij"。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S的长度在[1, 500]之间。
 * S只包含小写字母 'a' 到 'z' 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const arr = new Array(26).fill(0)
  for(let i = 0; i< s.length; i++){
    arr[s[i].charCodeAt() - 97] = i
  }
  let ans = []
  let max = 0
  let pre = 0
  for(let i = 0; i<s.length; i++){
    max = Math.max(arr[s[i].charCodeAt() - 97], max)
    if(i === max){
      ans.push(i+1 - pre)
      max = 0
      pre = i + 1
    }
  }
  return ans
};
// @lc code=end

