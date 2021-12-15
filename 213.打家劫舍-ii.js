/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (43.37%)
 * Likes:    858
 * Dislikes: 0
 * Total Accepted:    186.8K
 * Total Submissions: 430.5K
 * Testcase Example:  '[2,3,2]'
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈
 * ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 递归实现

// var robRange = function(start, end, nums){
//   const cache = []
//   cache[start] = nums[start]
//   cache[start+1] = Math.max(nums[start], nums[start+1])

//   const f = function(start, x){
//     if(x<start) return 0
//     if(cache[x] !== undefined) return cache[x]
//     cache[x] = Math.max(f(start, x-1), f(start, x-2) + nums[x])
//     return cache[x]
//   }
//   return f(start, end, nums)
// }
//  var rob = function(nums){
//    if(nums.length === 1) return nums[0]
//   return Math.max(robRange(1, nums.length - 1, nums), robRange(0, nums.length - 2, nums)) 
// }

// for循环

var robRange = function(start, end, nums){
  let pre = nums[start]
  let cur = Math.max(nums[start], nums[start+1])
  let temp = 0

  for(let i = start+2; i < end; i++){
    temp = pre
    pre = cur
    cur = Math.max(cur, temp+nums[i])
  }
  return cur
}

 var rob = function(nums){
   if(nums.length === 1) return nums[0]
  return Math.max(robRange(1, nums.length - 1, nums), robRange(0, nums.length - 2, nums)) 
}
// @lc code=end

