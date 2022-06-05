/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (60.08%)
 * Likes:    1257
 * Dislikes: 0
 * Total Accepted:    374.6K
 * Total Submissions: 623.4K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 
 * 
 * 
 * 必须在不使用库的sort函数的情况下解决这个问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以不使用代码库中的排序函数来解决这道题吗？
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, i, j){
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
// 
// var sortColors = function(nums) {
//   for(let i = 0; i<nums.length; i++){
//     let ind = i
//     for(j = i+1; j<nums.length; j++){
//       if(nums[j] < nums[ind]){
//         ind = j
//       }
//     }
//     swap(nums, i, ind)
//   }
//   return nums
// };

// var sortColors = function(nums){
//   const len = nums.length
//   const quick = function(array, left, right){
//     if(left >= right) return
//     const target = array[right]
//     let ind = left - 1
//     for(let i = left; i<=right; i++){
//       if(array[i] <= target){
//         ind++
//         if(ind !== i){
//           swap(array, ind, i)
//         }
//       }
//     }
//     quick(array, ind+1, right)
//     quick(array, left, ind-1)
//   }
//   quick(nums, 0, len-1)
//   return nums
// }

// var sortColors = function(nums){
//   let ind = 0
//   let len = nums.length
//   for(let i = 0; i<len; i++){
//     if(nums[i] === 0){
//       swap(nums, i, ind)
//       ind++
//     }
//   }
//   for(let i = 0; i<len; i++){
//     if(nums[i] === 1){
//       swap(nums, i, ind)
//       ind++
//     }
//   }
//   return nums
// }

var sortColors = function(nums){
  let ind = 0
  let len = nums.length
  for(let i = 0; i<len; i++){
    if(nums[i] === 0){
      swap(nums, i, ind)
      ind++
    }
  }
  for(let i = 0; i<len; i++){
    if(nums[i] === 1){
      swap(nums, i, ind)
      ind++
    }
  }
  return nums
}
// @lc code=end

