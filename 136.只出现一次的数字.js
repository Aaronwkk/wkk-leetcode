/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (72.12%)
 * Likes:    2394
 * Dislikes: 0
 * Total Accepted:    675.1K
 * Total Submissions: 935.7K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0
  for(let i = 0; i<nums.length; i++){
    ans ^= nums[i]
  }
  return ans
};

// 1、&
// 1的二进制表示为 0 0 0 0 0 0 1
// 3的二进制表示为 0 0 0 0 0 1 1
// 根据 & 的规则 得到的结果为 0 0 0 0 0 0 0 1,十进制表示就是1

// 2 、| 运算符
// | 跟 & 的区别在于 如果对应的位中任一个操作数为1 那么结果就是1
// 1 | 3 的结果为3

// 3、 ^ 运算符
// ^运算符跟 | 类似，但有一点不同的是 如果两个操作位都为1的话，结果产生0
// 0 1 0 0 0 0 0 1
// 0 1 0 1 1 0 1 0
// 产生 0 0 0 1 1 0 1 1

// @lc code=end

