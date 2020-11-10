/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = [];
  let left = 1;
  let right = 1;
  let sum = 0;
  while (left <= target / 2) {
    if (sum < target) {
      sum += right++;
    } else if (sum > target) {
      sum -= left++;
    } else {
      let temp = [];
      for (var k = left; k < right; k++) {
        temp[k - left] = k;
      }
      res.push(temp);
      sum -= left++;
      sum += right++;
    }
  }
  return res;
};
