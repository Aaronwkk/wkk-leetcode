/*
 * @lc app=leetcode.cn id=923 lang=javascript
 *
 * [923] 三数之和的多种可能
 *
 * https://leetcode-cn.com/problems/3sum-with-multiplicity/description/
 *
 * algorithms
 * Medium (34.23%)
 * Likes:    88
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 19.6K
 * Testcase Example:  '[1,1,2,2,3,3,4,4,5,5]\n8'
 *
 * 给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target
 * 的元组 i, j, k 的数量。
 * 
 * 由于结果会非常大，请返回 结果除以 10^9 + 7 的余数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1,1,2,2,3,3,4,4,5,5], target = 8
 * 输出：20
 * 解释：
 * 按值枚举（A[i]，A[j]，A[k]）：
 * (1, 2, 5) 出现 8 次；
 * (1, 3, 4) 出现 8 次；
 * (2, 2, 4) 出现 2 次；
 * (2, 3, 3) 出现 2 次。
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [1,1,2,2,2,2], target = 5
 * 输出：12
 * 解释：
 * A[i] = 1，A[j] = A[k] = 2 出现 12 次：
 * 我们从 [1,1] 中选择一个 1，有 2 种情况，
 * 从 [2,2,2,2] 中选出两个 2，有 6 种情况。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 3000
 * 0 <= A[i] <= 100
 * 0 <= target <= 300
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// 三指针

 var threeSumMulti = function(arr, target) {
  const list = new Array(101).fill(0)
  const mod = (10**9)+7
  for(let i = 0; i< arr.length; i++){
      ++list[arr[i]]
  }
  let res = 0
  for(let i = 0; i<= target; i++){
      for(let j = i; j <= target; j++){
          const d = target - i - j
          if(d < 0 || d < j || d >= list.length) continue
          if(!list[i] || !list[j] || !list[d]) continue
          if(i === j && d === j){
              res += ((list[i] - 1) * (list[i] - 2) * list[i])/6
          } else if(i === j && d !== j){
              res += ((list[i] - 1) * list[i])/2 * list[d]
          } else if(j === d && i !== j){
              res += list[j] * (list[j] - 1) * list[i]/2
          } else {
              res += list[i] * list[d] * list[j]
          }
      }
  }
  return res%mod
};
// @lc code=end

