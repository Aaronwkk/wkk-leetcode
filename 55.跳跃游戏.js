/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (43.37%)
 * Likes:    1534
 * Dislikes: 0
 * Total Accepted:    369.8K
 * Total Submissions: 852.5K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个下标。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
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
 * @return {boolean}
 */
// var rob = function(nums){
//   let pre = nums[0]
//   let cur = Math.max(nums[0], nums[1])

//   for(let i = 2; i < nums.length; i++){
//     const temp = pre
//     pre = cur
//     cur = Math.max(cur, temp+nums[i])
//   }
//   return cur
// }

// var canJump = function(nums) {
//   let max = Number.MIN_SAFE_INTEGER
//   for(let ind in nums){
//     max = Math.max(nums[ind], max)
//   }
//   const arr = new Array(max+1).fill(0)
//   for(let i = 0; i < nums.length; i++){
//     arr[nums[i]] += nums[i]
//   }
//   return rob(arr)
// };

// 动态规划（不是最优解）

// var canJump = function(nums){
//   const cache = []
//   const f = function (n){
//     if(cache[n] !== undefined) return cache[n]
//     if(n >= nums.length) return true
//     if(n + nums[n] >= nums.length-1) return true
//     let ind = 1
//     while(ind <= nums[n]){
//       cache[n] = f(ind+n)
//       if(cache[n]) return true
//       ind++
//     }
//     return false
//   }
//   return f(0)
// }

// 贪心

var canJump = function(nums){
  let max = nums[0]
  for(let i = 1; i < nums.length; i++){
    if(i > max) return false
    max = Math.max(max, nums[i]+i)
  }
  if(max >= nums.length-1) return true
  return false
}
// @lc code=end

