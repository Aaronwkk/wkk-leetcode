/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (68.26%)
 * Likes:    986
 * Dislikes: 0
 * Total Accepted:    239K
 * Total Submissions: 349.5K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 * 示例 1:
 * 
 * 
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 30 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let n = temperatures.length

  const stack = new Array()
  let ans = new Array(temperatures.length).fill(0)

  for(let i=0 ; i<n; i++){
    const t = temperatures[i]
    while(stack.length && t > temperatures[stack[stack.length - 1]]){
      preIndex = stack.pop()
      ans[preIndex] = i - preIndex
    }
    stack.push(i)
  }
  return ans
};
// @lc code=end

