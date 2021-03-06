/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (42.23%)
 * Likes:    1404
 * Dislikes: 0
 * Total Accepted:    204K
 * Total Submissions: 483.1K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//   const cache = new Array(nums.length)
//   const dp = function(n){
//     if(n <0 ) return 0
//     if(cache[n] !== undefined) return cache[n]
//     cache[n] = Math.max(dp(n-1)+nums[n], nums[n])
//     return cache[n]
//   }
//   let max = Number.MIN_SAFE_INTEGER
//   for(let i = 0; i<nums.length; i++){
//     max = Math.max(dp(i), max)
//   }
//   return max
// };

var maxProduct = function(nums){

  if(nums.length<=0) return 0

  let max = nums[0]
  let min = nums[0]
  let res = nums[0]

  for(let i = 1; i<nums.length; i++){
    const mx = max, mn = min;
    max = Math.max(nums[i]*mx, nums[i], nums[i]*mn)
    min = Math.min(nums[i]*mn, nums[i], mx*nums[i])
    res = Math.max(max, res)
  }
  return res
}
// @lc code=end

