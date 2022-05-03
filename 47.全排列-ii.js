/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (64.29%)
 * Likes:    960
 * Dislikes: 0
 * Total Accepted:    269.9K
 * Total Submissions: 419.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const len = nums.length - 1
  let ans = []
  function swap(arr, i, j){
    const t = arr[j]
    arr[j] = arr[i]
    arr[i] = t
  }
  const dfs = function(list, i){
    if(i > len){
      let res = []
      for(let n of list){
        res.push(n)
      }
      ans.push(res)
    }
    let l = []
    for(let j = i; j <= len; j++){
      if(!l.includes(list[j])){
        l.push(list[j])
        swap(list, i, j)
        dfs(list, i+1)
        swap(list, i, j)
      }
    }
  }
  dfs(nums, 0)
  return ans
};
// @lc code=end

