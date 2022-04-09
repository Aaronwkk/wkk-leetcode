/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.46%)
 * Likes:    4455
 * Dislikes: 0
 * Total Accepted:    844.6K
 * Total Submissions: 2.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = []
  nums.sort((a, b) => a - b)

  for(i = 0; i<nums.length; i++){
    
    let l = i + 1
    let r = nums.length - 1
    
    if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重

    while(l<r){
      const sum = nums[i] + nums[l] + nums[r]
      if(sum === 0){
        ans.push([nums[i], nums[l], nums[r]])
        while(l<r && nums[l] === nums[l+1]) l++
        while(l<r && nums[r] === nums[r-1]) r--
        l++
        r--
      } else if(sum > 0 ){
        r--
      } else if(sum < 0){
        l++
      }
    }

  }
  return ans
};
// @lc code=end

