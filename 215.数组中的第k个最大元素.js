/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.70%)
 * Likes:    1595
 * Dislikes: 0
 * Total Accepted:    588.8K
 * Total Submissions: 910.5K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 
 * 
 * 提示： 
 * 
 * 
 * 1 
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function swap(list, a, b){
    const t = list[b]
    list[b] = list[a]
    list[a] = t
  }
  function maxHeapify (a, i, max){
    const l = i*2 + 1
    const r = i*2 + 2
    let maxI = i
    if(l<max && a[l] > a[maxI]){
      maxI = l
    }
    if(r<max && a[r] > a[maxI]){
      maxI = r
    }
    if(maxI !== i){
      swap(a, i, maxI)
      maxHeapify(a, maxI, max)
    }
  }
  function buildHeap (a, max){
    for(let i = Math.floor(a.length / 2); i >= 0 ; i--){
      maxHeapify(a, i, max)
    }
  }
  function findKthLargest(a, k){
    let heapSize = a.length - 1
    buildHeap(a, a.length)
    for(let i = 0; i < k-1; i++){
      swap(a, 0, heapSize)
      heapSize--
      maxHeapify(a, 0, heapSize)
    }
    return a[0]
  }

  return findKthLargest(nums, k)
};
// @lc code=end

