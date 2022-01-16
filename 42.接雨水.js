/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (58.96%)
 * Likes:    2973
 * Dislikes: 0
 * Total Accepted:    372.7K
 * Total Submissions: 630.5K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   let n = height.length
//   l = new Array(n)
//   r = new Array(n)
//   let ans = 0
//   for(let i = 0; i<n; i++){
//     l[i] = i === 0? height[i]:Math.max(l[i-1], height[i])
//   }
//   for(let i = n-1; i>=0; i--){
//     r[i] = i === n-1? height[i]:Math.max(r[i+1], height[i])
//   }
//   for(let i = 0; i<n; ++i){
//     ans += Math.min(l[i], r[i]) - height[i]
//   }
//   return ans
// };

var trap = function(){
  
}
// @lc code=end