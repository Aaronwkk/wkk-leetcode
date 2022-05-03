// var coinChange = function(coins, amount) {
//   const dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
//   dp[0] = 0;  //dp[i]:换到面值i所用的最小数量
//   for(let i = 0; i<=amount ; i++){
//     for(coin of coins){
//       if(coin <= i){
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
//   }
//   return dp[amount] > amount ? -1 : dp[amount];
// };