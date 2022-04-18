// 输入： arr = ['D12','D12A','B','BX','B1','B2','D12B','C90','C100','B0']
// 输出： ['B','B0','B1','B2','BX','C90','C100','D12','D12A','D12B']

function swap(list, a, b){
  const t = list[b]
  list[b] = list[a]
  list[a] = t
}

function compare(a, b){
  if(a.length > b.length) return true
  return a > b
}

function resort(arr) {
  const len = arr.length
  for(let i = 0; i<len; i++){
    let min = i
    for(let j = i; j<len; j++){
      if(!compare(arr[j], arr[min])){
        min = j
      }
    }
    swap(arr, min, i)
  }
  return arr
}

// const arr = ['D12','D12A','B','BX','B1','B2','D12B','C90','C100','B0']
// let a = resort(arr)
// console.log(a)

// 八大经典排序
// https://juejin.cn/post/6844903444365443080#heading-6

// 冒泡排序（Bubble Sort）

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {

          if (arr[j] > arr[j+1]) {        //相邻元素两两对比
            swap(arr, j, j+1)
          }

      }
  }
  return arr;
}

// 2.选择排序（Selection Sort）

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     //寻找最小的数
              minIndex = j;                 //将最小数的索引保存
          }
      }
      swap(arr, i, minIndex)
  }
  return arr;
}


// 3.插入排序（Insertion Sort）

function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var val = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > val) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = val;
    }
    return array;
}

// 5.归并排序（Merge Sort）

function mergeSort(arr) {  //采用自上而下的递归方法
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var result = [];
  console.time('归并排序耗时');
  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());
  console.timeEnd('归并排序耗时');
  return result;
}

// 6.快速排序（Quick Sort）

/*方法说明：快速排序
@param  array 待排序数组*/
//方法一
function quickSort(array, left, right) {
  if (left < right) {
      var x = array[right], i = left - 1, temp;
      for (var j = left; j <= right; j++) {
          if (array[j] <= x) {
              i++;
              swap(array, i, j)
          }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
  }
  return array;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

// console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
