# 15.三数之和
## 算法思想：  
做题中心： **双指针+排序**  
1. 首先将数组 nums 排序
2. 然后用 for 遍历排序后的数组，固定 每个 nums[i], 设定两个指针，l = nums[i] +1 , r = nums.length -1,执行循环：   
 如果 nums[i] + nums[l] + nums[r] == 0, push到 res 中，在这个循环过程中剪枝， 当 nums[l] == nums[l - 1]/nums[r] == nums[r - 1]时，跳过本次循环。
 若 和大于0， 说明 nums[r] 过大， 此时 r 左移。
 若 和小于0， 说明 nums[l] 过小， 此时 l 右移
## **复杂度分析**
时间复杂度： O(n2), 数值排序 O(NlogN), 遍历数组 O(n)，双指针遍历 O(n)， 总体 O(NlogN)+O(n)∗O(n),O(n2)
空间复杂度：O(1) 
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length< 3){return []}
    let res = [];
    nums.sort((a,b) =>{return a-b})
    for(let i = 0; i < nums.length; i++){
        if(i> 0 && nums[i] == nums[i -1]) continue
        let p1 = i + 1,p2 = nums.length -1
        while (p1<p2){
            let sum = nums[i]+ nums[p1] + nums[p2]
            if(sum == 0){
                res.push([nums[i],nums[p1],nums[p2]])
                 while (p1<p2 && nums[p1] == nums[p1+1]) p1++; // 去重
           while (p1<p2 && nums[p2] == nums[p2-1]) p2--; // 去重
                p1++;
                p2--;
            }else if(sum > 0){
                p2--;
            }else if(sum < 0){
                p1++;
            }
        }
    }
    return res
};
```