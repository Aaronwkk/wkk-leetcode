/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (74.04%)
 * Likes:    1271
 * Dislikes: 0
 * Total Accepted:    314.8K
 * Total Submissions: 424.9K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// function swap(matrix, [], []){
//   const t = arr[i]
//   arr[i] = arr[j]
//   arr[j] = t
// }
// var rotate = function(matrix) {
//   let w = matrix[0].length
//   let h = matrix.length

//   function colFold(){
//     let bottom = h - 1
//     let top = 0
//     while(top<bottom){
//       let ind = 0
//       while(ind <= w-1){
//         const t = matrix[top][ind]
//         matrix[top][ind] = matrix[bottom][ind]
//         matrix[bottom][ind] =t
//         ind++
//       }
//       top++
//       bottom--
//     }
//   }
//   function slantFold (){
//     let ind = 0
//     while(ind<=w-1){
//       let top = 0
//       while(top<ind){
//         const t = matrix[top][ind]
//         matrix[top][ind] = matrix[ind][top]
//         matrix[ind][top] =t
//         top++
//       }
//       ind++
//     }
//   }
//   colFold()
//   slantFold()
//   return matrix
// };

var rotate = function(matrix) {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
};

// @lc code=end

