/**
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 迭代
var rob = function (nums) {
  let length = nums.length;
  if (length == 1) return nums[0];
  if (length == 2) return Math.max(nums[0], nums[1]);
  let pre2 = nums[0];
  let pre1 = Math.max(nums[0], nums[1]);
  let sum = 0;
  for (let i = 2; i <= length - 1; i++) {
    sum = Math.max(nums[i] + pre2, pre1);
    pre2 = pre1;
    pre1 = sum;
  }
  return sum;
};

// 递归
function rob(nums){
  let dp = new Array(nums.length).fill(-1)
  function cal(nums,index){
    if(index>=nums.length) return 0;
    if(dp[index]!=-1) return dp[index];
    let res = Math.max(cal(nums,index+1),cal(nums,index+2)+nums[index])
    dp[index] = res
    return res
  }
  return cal(nums,0)
}

// 环形数组
function rob(nums){
  let length = nums.length;
  if(length==1) return nums[0]
  function cal(nums,start,end){
    let pre1=0;
    let pre2=0;
    let sum=0
    for(let i=end;i>=start;i--){
      sum = Math.max(pre1,pre2+nums[i]);
      pre2 = pre1
      pre1 = sum;
    }
    return sum
  }
  return Math.max(cal(nums,0,length-2),cal(nums,1,length-1))
}


