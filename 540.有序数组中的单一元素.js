/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 *
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (58.13%)
 * Likes:    295
 * Dislikes: 0
 * Total Accepted:    41.8K
 * Total Submissions: 71.7K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
 * 
 * 请你找出并返回只出现一次的那个数。
 * 
 * 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,1,2,3,3,4,4,8,8]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums =  [3,3,7,7,10,11,11]
 * 输出: 10
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let l = 0
  let r = nums.length-1
  while(l<r){
    let mid = l+((r-l)>>1)
    if(mid%2 === 1){
      mid--
    }
    if(nums[mid] === nums[mid+1]){
      l = mid+2
    }else{
      r = mid
    }
  }
  return nums[l]
};
// @lc code=end

