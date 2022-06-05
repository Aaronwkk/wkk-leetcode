/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (72.83%)
 * Likes:    1179
 * Dislikes: 0
 * Total Accepted:    259.6K
 * Total Submissions: 356.5K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 
 * 
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 2000] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function(root) {
//   const list = []
//   const dfs = function(node){
//     if(!node) return null
//     list.push(node)
//     dfs(node.left)
//     dfs(node.right)
//   }
//   dfs(root)
//   for(let i = 1; i<list.length; i++){
//     const pre = list[i-1]
//     const cur = list[i]
//     pre.left = null
//     pre.right = cur
//   }
//   return list[0]
// };
var flatten = function(root){
  const list = []
  const stack = []
  let cur = root
  while(stack.length || cur){
    while(cur){
      list.push(cur)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
    for(let i = 1; i<list.length; i++){
    const pre = list[i-1]
    const cur = list[i]
    pre.left = null
    pre.right = cur
  }
  return list[0]
}
// @lc code=end

