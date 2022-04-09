/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (57.41%)
 * Likes:    1202
 * Dislikes: 0
 * Total Accepted:    138.2K
 * Total Submissions: 240.4K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * 输出：3
 * 解释：和等于 8 的路径有 3 条，如图所示。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,1000]
 * -10^9  
 * -1000  
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const dfs = (root, prefix, curr, targetSum) => {
  if (root == null) {
    return 0;
  }

  let ret = 0;
  curr += root.val;

  ret = prefix.get(curr - targetSum) || 0;

  prefix.set(curr, (prefix.get(curr) || 0) + 1);
  console.log(root.val, curr, prefix.get(curr) + 1)

  ret += dfs(root.left, prefix, curr, targetSum);
  ret += dfs(root.right, prefix, curr, targetSum);
  
  prefix.set(curr, (prefix.get(curr) || 0) - 1);
  console.log(root.val, curr, prefix.get(curr) - 1)

  return ret;

}
var pathSum = function(root, targetSum) {
  const prefix = new Map();
  prefix.set(0, 1);
  return dfs(root, prefix, 0, targetSum);
}
// @lc code=end

