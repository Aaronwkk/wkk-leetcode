/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const n = text1.length
  const m = text2.length
  const memos = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0))

  for(let i = 1 ; i<=n; i++){
    for(let j = 1 ; j<=m; j++){
        if(text1.charAt(i-1) === text2.charAt(j-1)){
          memos[i][j] = memos[i-1][j-1] + 1
        } else {
          memos[i][j] = Math.max(memos[i-1][j], memos[i][j-1])
        }
    }
  }
  return memos[n][m]
};

// @lc code=end

