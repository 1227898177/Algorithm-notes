# 搜索
## 顺序搜索
### 算法思想
● 遍历数组  
● 找到跟目标值相等的元素，就返回它的下标。  
● 遍历结束后，如果没有搜索到目标值，就返回-1  
### 代码
```javascript
function sqquentialSearch(arr,target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == target){
      return i
    }
  }
  return -1
}
```
## 二分搜索
### 算法思想 
**重点：**  
对于 **二分查找**来说，重点是 我们能够根据题意：得到某种单调性，
和可以逐步缩小搜索规模的条件，进而准确的设计可以使得搜索区间缩小的条件。

**前提:** 数组有序，且没有重复元素  
● 从数组的中间元素开始。如果中间元素正好是目标值，则搜索结束。  
● 如果目标值大于或小于中间元素，则在大于或小于中间元素的那一半数组中搜索。  
### 代码
```javascript
function binarySearch(arr,target){
  let left = 0;
  let right = arr.length -1;
  while(left<= right){
    let mid = Math.floor((left + right) / 2 )
    if(arr[mid] > target){
      right = mid - 1;
    }else if(arr[mid]< target){
      left = mid + 1;
    }else{
      return mid
    }
  }
  return -1;
}
```