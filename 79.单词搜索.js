/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (46.22%)
 * Likes:    1284
 * Dislikes: 0
 * Total Accepted:    308.3K
 * Total Submissions: 666.7K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const bw = board[0].length
  const bh = board.length
  let ans = false

  const visited = new Array(bh).fill(0).map(() => new Array(bw).fill(false))

  const backtracking = function(ind, h, w){
    if(h>= bh|| h<0 || w<0 || w >= bw || ans) return
    if(visited[h][w]) return
    if(board[h][w] !== word[ind]) return
    if(ind === word.length - 1) {
      ans = true
      return
    }
    const buffer = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    visited[h][w] = true
    for(let i = 0; i<buffer.length; i++){
      const [ih, iw] = buffer[i]
      backtracking(ind+1, h+ih, w+iw)
    }
    visited[h][w] = false
  }

  for(let i = 0; i<bh; i++){
    for(let j = 0; j<bw; j++){
      backtracking(0, i, j)
    }
  }

  return ans
};
// @lc code=end

