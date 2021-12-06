/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (40.41%)
 * Likes:    1141
 * Dislikes: 0
 * Total Accepted:    510.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0
 * 开始）。如果不存在，则返回  -1 。
 * 
 * 
 * 
 * 说明：
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf()
 * 定义相符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：haystack = "hello", needle = "ll"
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：haystack = "aaaaa", needle = "bba"
 * 输出：-1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：haystack = "", needle = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * haystack 和 needle 仅由小写英文字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//   const dp = new Array(needle.length)
//   for(let i=0; i<needle.length; i++){

//   }
// };

var strStr = function(ss, pp){

  if (!pp.length) return 0;
  
  // 分别读取原串和匹配串的长度
  const n = ss.length, m = pp.length;
  // 原串和匹配串前面都加空格，使其下标从 1 开始
  ss = " " + ss;
  pp = " " + pp;

  const s = ss.toCharArray();
  const p = pp.toCharArray();

  // 构建 next 数组，数组长度为匹配串的长度（next 数组是和匹配串相关的）
  const next = new Array[m + 1];
  // 构造过程 i = 2，j = 0 开始，i 小于等于匹配串长度 【构造 i 从 2 开始】
  for (let i = 2, j = 0; i <= m; i++) {
      // 匹配不成功的话，j = next(j)
      while (j > 0 && p[i] != p[j + 1]) j = next[j];
      // 匹配成功的话，先让 j++
      if (p[i] == p[j + 1]) j++;
      // 更新 next[i]，结束本次循环，i++
      next[i] = j;
  }

  // 匹配过程，i = 1，j = 0 开始，i 小于等于原串长度 【匹配 i 从 1 开始】
  for (let i = 1, j = 0; i <= n; i++) {
      // 匹配不成功 j = next(j)
      while (j > 0 && s[i] != p[j + 1]) j = next[j];
      // 匹配成功的话，先让 j++，结束本次循环后 i++
      if (s[i] == p[j + 1]) j++;
      // 整一段匹配成功，直接返回下标
      if (j == m) return i - m;
  }

  return -1;
}

// @lc code=end

