/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.77%)
 * Likes:    1544
 * Dislikes: 0
 * Total Accepted:    339.6K
 * Total Submissions: 478.4K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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
//  preorder = [3,9,20,15,7]
//  inorder = [9,3,15,20,7]
// 前序中左起第一位1肯定是根结点，我们可以据此找到中序中根结点的位置rootin；
// 中序中根结点左边就是左子树结点，右边就是右子树结点，即[左子树结点，根结点，右子树结点]，
// 我们就可以得出左子树结点个数为int left = rootin - leftin;；
// 前序中结点分布应该是：[根结点，左子树结点，右子树结点]；
// 根据前一步确定的左子树个数，可以确定前序中左子树结点和右子树结点的范围；
// 如果我们要前序遍历生成二叉树的话，下一层递归应该是：
// 左子树：root->left = pre_order(前序左子树范围，中序左子树范围，前序序列，中序序列);；
// 右子树：root->right = pre_order(前序右子树范围，中序右子树范围，前序序列，中序序列);。
// 每一层递归都要返回当前根结点root；
 
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {

  let map = new Map()
  let n = preorder.length

  for(let i = 0; i<n; i++){
    map.set(inorder[i], i)
  }

  function buildTreeHelper (preLeft, preRight, inLeft, inRight){

    if(preLeft > preRight || inLeft > inRight){
      return null
    }

    const ind = map.get(preorder[preLeft])
    const node = new TreeNode(preorder[preLeft])
    const leftNum = ind - inLeft

    node.left = buildTreeHelper(preLeft+1, preLeft+leftNum, inLeft, ind - 1)
    node.right = buildTreeHelper(leftNum+preLeft+1, preRight, ind+1, inRight)

    return node
  }

  return buildTreeHelper(0, n - 1, 0, n - 1)
};
// @lc code=end



