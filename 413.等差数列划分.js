/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 *
 * https://leetcode-cn.com/problems/arithmetic-slices/description/
 *
 * algorithms
 * Medium (68.85%)
 * Likes:    379
 * Dislikes: 0
 * Total Accepted:    76.6K
 * Total Submissions: 111.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。
 * 
 * 
 * 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
 * 
 * 
 * 
 * 
 * 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。
 * 
 * 子数组 是数组中的一个连续序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,4]
 * 输出：3
 * 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -1000 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var numberOfArithmeticSlices = function(nums) {

//     const len = nums.length
//     if(len < 3) return 0

//     let d = nums[1] - nums[0]
//     let dp = new Array(len)
//     dp[0] = dp[1] = 0

//     for(let i=2; i<len; i++){
//       if(nums[i] - nums[i-1] === d){
//         dp[i] = dp[i-1]+1
//       }else{
//         d = nums[i] - nums[i-1]
//         dp[i] = dp[i-1]
//       }
//     }
//     console.log(dp)
//     return dp[len-1]
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {

  const len = nums.length
  if(len < 3) return 0

  let ans = 0, l=0

  for(let i=2; i<len; i++){
    nums[i] - nums[i-1] == nums[i-1] - nums[i-2] ? ans += ++l : l = 0;
  }
  return ans
};

console.log(numberOfArithmeticSlices([1,2,3,4]))
// @lc code=end

