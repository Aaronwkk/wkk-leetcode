/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (61.57%)
 * Likes:    991
 * Dislikes: 0
 * Total Accepted:    132.3K
 * Total Submissions: 214.8K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 
 * 
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 
 * 示例:
 * 
 * 输入: [1,2,3,0,2]
 * 输出: 3 
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 分析 有点难
// 1 > sold 当前卖掉股票，获得的最大值
// 2 > holding 指当前持有股票，可以卖掉股票
// 3 > cooldown 指当前是冷却期，可以购买股票
var maxProfit = function(prices) {
  const dp = function(n){
    if(n < 0) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0]
    const [sold, holding, cooldown] = dp(n-1)
    return [
      holding + prices[n],
      Math.max(holding, cooldown - prices[n]),
      Math.max(sold, cooldown)
    ]
  }
  return Math.max(...dp(prices.length - 1))
};

// 另一种解法 状态机
// @lc code=end

