/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (46.39%)
 * Likes:    540
 * Dislikes: 0
 * Total Accepted:    184.7K
 * Total Submissions: 397.5K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var find = function(nums, target){
  let l = 0
  let r = nums.length - 1
  while(l<r){
    const mid = Math.ceil(l+(r-l)/2)
    if(nums[mid] <= target){
      l = mid
    }else{
      r = mid - 1
    }
  }
  return l
}
var searchMatrix = function(matrix, target) {

  const cols = matrix.map(item => item[0])
  const col = find(cols, target)

  const ind = find(matrix[col], target)

  return matrix[col][ind] === target 
};
// @lc code=end

