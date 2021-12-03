/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (56.72%)
 * Likes:    619
 * Dislikes: 0
 * Total Accepted:    227.1K
 * Total Submissions: 400K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7]
 * 在变化后可能得到：
 * 
 * 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
 * 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
 * 
 * 
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2],
 * ..., a[n-2]] 。
 * 
 * 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,4,5,1,2]
 * 输出：1
 * 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2]
 * 输出：0
 * 解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [11,13,15,17]
 * 输出：11
 * 解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 
 * -5000 
 * nums 中的所有整数 互不相同
 * nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 左边都大于右边 
// 假如右边比中间值小，中点在左边，l = mid+1
// 假如左边比中间值小，中点在右边 h = mid
// 为什么左边+1不是右边+1？ 
// 当中间值小于 右边 中间值可能是答案，而中间值大于左边时，不可能是答案
var findMin = function(nums) {
  let l = 0
  let h = nums.length - 1
  while(l<h){
    const mid = Math.floor(l+(h-l)/2)
    if(nums[mid]<nums[h]){
      h = mid
    }else{
      l = mid+1
    }
  }
  return nums[h]
};
// @lc code=end

