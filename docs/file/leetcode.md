## 373.查找和最小的k对数字
### 算法思想：  
1. 暴力  
找到nums1 和 nums2长度与k的最小值，提取对应数组的值得tmp，再排序得前k个最小的值
### 代码
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let tmp = [];
    for(let i = 0; i < Math.min(nums1.length,k); i++){
        for(let j = 0; j < Math.min(nums2.length,k); j++){
            tmp.push([nums1[i],nums2[j],nums1[i]+nums2[j]])
        }
    }
    tmp.sort((a,b)=>{
        return a[2] - b[2]
    })
    let count = 0,res = [];
    for(let i = 0 ; i < tmp.length;i++){
        res.push([tmp[i][0],tmp[i][1]])
        count++;
        if(count == k){
            break
        }
    }
    return res
};
```

## 264.丑数Ⅱ
**知识前瞻：**
质因数：指能整除给定正整数的质数。  
本题关键：多路并归、堆、优先队列  
### 代码
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ret=[1],p2=0,p3=0,p5=0;
    while(n>0)
        {
            let temp = Math.min(ret[p2]*2,ret[p3]*3,ret[p5]*5)
            ret.push(temp)
            if(ret[p2]*2==temp)
                {p2++}
            if(ret[p3]*3==temp)
                {p3++}
            if(ret[p5]*5==temp)
                {p5++}
            n--;
        }
    return ret[ret.length-2]
};
```

## 539.最小时间差
### 算法思想：  
将timePorts 排序，得到按大小排序后的数组，计算相邻两个数字之间的差值，求得最小值res。  
然后计算首尾数字之间的差值，与res 比较，取最小值。  
**优化：** 利用鸽巢原理，总共会有 24 * 60  = 1440 种不同的时间。因此当 timePorts 的长度超过 1440，则可以直接返回0。

**需要注意的点** 就是类似 [00:00, ... 23:59] 这种，第一个值和最后一个值在结果上可能影响最终的返回，此时需要对加上一轮1440，再减去最后一个值，得到的差和上一步的最小值比较得出最终的最小值。

### 代码：  
```javascript
var findMinDifference = function(timePoints) {
    if(timePoints > 1440) return 0
    let arr = [];
    let min = 0;
    timePoints.sort();
    for(let i = 0; i < timePoints.length; i++){
        timePoints[i] = timePoints[i].split(':')
        arr.push(parseInt(timePoints[i][0]*60)+ parseInt(timePoints[i][1]))
    }
    let res = Number.MAX_VALUE;
    for(let i = 1; i <arr.length; i++){
        res = Math.min(res,arr[i] - arr[i-1])

    }
     return Math.min(res,arr[0] + 1440 - arr[arr.length -1])
};
```

## 219.存在重复元素Ⅱ

### 法一：哈希表，map
**算法思想：**  
创建哈希表map，遍历整个数组，并将nums[i]和i 值以键值对的形式添加进去，当存在下标 j  < i 使得 nums[i] == nums[j] 时，满足条件 j - i <= k,返回 true
当存在 j - i > k ,且 map值中已经存在 nums[i]时，将当前遍历到的 j和nums[j] 的值添加进去。  
遍历结束，没有返回 true ，则返回 false。  
**复杂度分析：**  
● 时间复杂度：O(n)，其中 n 是数组 nums 的长度。需要遍历数组一次，对于每个元素，哈希表的操作时间都是 O(1)。

● 空间复杂度：O(n)，其中 n 是数组 nums 的长度。需要使用哈希表记录每个元素的最大下标，哈希表中的元素个数不会超过 n。

**代码：**
```javascript
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i <nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],i)
        }else if(map.has(nums[i]) && i - map.get(nums[i]) <= k ){
            return  true
        }else if(map.has(nums[i]) && i - map.get(nums[i]) > k){
            map.set(nums[i],i)
        }

    }
    return  false
    console.log(map)
};
```
### 法二：滑动窗口
**算法思想：**  
考虑数组 nums 中的每个长度不超过 k+1 的滑动窗口，同一个滑动窗口中的任意两个下标差的绝对值不超过 k。如果存在一个滑动窗口，其中有重复元素，则存在两个不同的下标 i 和 j 满足nums[i] = nums[j] 且 ∣i−j∣≤k。如果所有滑动窗口中都没有重复元素，则不存在符合要求的下标。因此，只要遍历每个滑动窗口，判断滑动窗口中是否有重复元素即可。

如果一个滑动窗口的结束下标是 ii，则该滑动窗口的开始下标是 max(0,i−k)。可以使用哈希集合存储滑动窗口中的元素。从左到右遍历数组 nums，当遍历到下标 i 时，具体操作如下：

如果 i>k，则下标 i−k−1 处的元素被移出滑动窗口，因此将 nums[i−k−1] 从哈希集合中删除；

判断 nums[i] 是否在哈希集合中，如果在哈希集合中则在同一个滑动窗口中有重复元素，返回 true，如果不在哈希集合中则将其加入哈希集合。

当遍历结束时，如果所有滑动窗口中都没有重复元素，返回 false。
**复杂度分析：**  
●时间复杂度：O(n)，其中 nn 是数组 nums 的长度。需要遍历数组一次，对于每个元素，哈希集合的操作时间都是 O(1)。

●空间复杂度：O(k)，其中 kk 是判断重复元素时允许的下标差的绝对值的最大值。需要使用哈希集合存储滑动窗口中的元素，任意时刻滑动窗口中的元素个数最多为 k+1 个

**代码：**  
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i])
    }
    return false;
};
```