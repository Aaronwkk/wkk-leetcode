/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (57.88%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    48.8K
 * Total Submissions: 84.1K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树 root，返回所有重复的子树。
 * 
 * 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 
 * 如果两棵树具有相同的结构和相同的结点值，则它们是重复的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [1,2,3,4,null,2,4,null,null,4]
 * 输出：[[2,4],[4]]
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root = [2,1,1]
 * 输出：[[1]]
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：root = [2,2,2,3,null,3,null]
 * 输出：[[2,3],[3]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的结点数在[1,10^4]范围内。
 * -200 <= Node.val <= 200
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
 * @return {TreeNode[]}
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
//  var findDuplicateSubtrees = function (root) {
//   // 记录所有子树以及出现的次数
//   const memo = new Map();
//   // 记录重复的子树根节点
//   const res = [];

//   const traverse = (node) => {
//     // 对于空节点，可以用一个特殊字符表示
//     if (!node) {
//       return "#";
//     }
//     // 将左右子树序列化成字符串，左右子树加上自己，就是以自己为根的二叉树序列化结果
//     const key = node.val + "," + traverse(node.left) + traverse(node.right);
//     // 让每个节点把自己的序列化结果存进去，对于每个节点，就可以知道有没有其他节点的子树和自己重复了
//     let freq = memo.get(key) || 0;
//     // 多次重复也只会被加入结果集一次
//     if (freq == 1) {
//       // 有人和我重复，把自己加入结果列表
//       res.unshift(node);
//     }
//     // 给子树对应的出现次数加一
//     memo.set(key, freq + 1);
//     return key;
//   };

//   traverse(root);
//   return res;
// };

var findDuplicateSubtrees = function(root){
  let ans = []
  let map = new Map()

  const traverse = function(node){

    if(!node) return '#'

    const k = `${node.val}-${traverse(node.left)}-${traverse(node.right)}`
    const n = map.get(k) || 0
    if(n===1){
      ans.push(node)
    }
    map.set(k, n+1)
    return k
  }
  traverse(root)
  return ans
}

// @lc code=end

