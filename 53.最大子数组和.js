/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (55.30%)
 * Likes:    4098
 * Dislikes: 0
 * Total Accepted:    780.1K
 * Total Submissions: 1.4M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 子数组 是数组中的一个连续部分。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 通过 for 循环（也是动态规划，向前面的子问题要答案，对比最大值）

var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let pre = 0
  for(let i = 0; i<nums.length; i++){
    pre = Math.max(pre+nums[i], nums[i])
    max = Math.max(max, pre)
  }
  return max
};

// 通过dp实现

// var maxSubArray = function(nums) {
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
// @lc code=end

