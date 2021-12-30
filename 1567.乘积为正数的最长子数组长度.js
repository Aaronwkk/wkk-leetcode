/*
 * @lc app=leetcode.cn id=1567 lang=javascript
 *
 * [1567] 乘积为正数的最长子数组长度
 *
 * https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/description/
 *
 * algorithms
 * Medium (40.70%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    17K
 * Total Submissions: 41.8K
 * Testcase Example:  '[1,-2,-3,4]'
 *
 * 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。
 * 
 * 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。
 * 
 * 请你返回乘积为正数的最长子数组长度。
 * 
 * 
 * 
 * 示例  1：
 * 
 * 输入：nums = [1,-2,-3,4]
 * 输出：4
 * 解释：数组本身乘积就是正数，值为 24 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [0,1,-2,-3,-4]
 * 输出：3
 * 解释：最长乘积为正数的子数组为 [1,-2,-3] ，乘积为 6 。
 * 注意，我们不能把 0 也包括到子数组中，因为这样乘积为 0 ，不是正数。
 * 
 * 示例 3：
 * 
 * 输入：nums = [-1,-2,-3,0,1]
 * 输出：2
 * 解释：乘积为正数的最长子数组是 [-1,-2] 或者 [-2,-3] 。
 * 
 * 
 * 示例 4：
 * 
 * 输入：nums = [-1,2]
 * 输出：1
 * 
 * 
 * 示例 5：
 * 
 * 输入：nums = [1,2,3,5,-6,4,0,10]
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  情况比较多，建议画图理解，没有完全理解
var getMaxLen = function(nums) {
  const length = nums.length;
  let positive = nums[0] > 0 ? 1 : 0;
  let negative = nums[0] < 0 ? 1 : 0;
  let maxLength = positive;
  for(let i=1; i<nums.length; i++){
    if(nums[i] > 0){
      positive++
      negative = negative > 0? negative+1:0
    }else if(nums[i] < 0){
      const np = negative > 0? negative+1:0
      const nn = positive + 1
      positive = np
      negative = nn
    }else{
      positive = 0
      negative = 0
    }
    maxLength = Math.max(maxLength, positive);
  }
  // for (let i = 1; i < length; i++) {
  //     if (nums[i] > 0) {
  //         positive++;
  //         negative = negative > 0 ? negative + 1 : 0;
  //     } else if (nums[i] < 0) {
  //       const newPositive = negative > 0 ? negative + 1 : 0;
  //       const newNegative = positive + 1;
  //         positive = newPositive;
  //         negative = newNegative;
  //     } else {
  //         positive = 0;
  //         negative = 0;
  //     }
  //     maxLength = Math.max(maxLength, positive);
  // }
  return maxLength;
};
// @lc code=end

