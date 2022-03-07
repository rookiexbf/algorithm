// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

// 示例 1：
// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").

// 示例 2：
// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false

// 思路：和最小子串的类似，滑动窗口，不需要注意排列的顺序问题，不同点在于收缩的条件是满足窗口的大小等于s1的长度时就开始收缩

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let need = new Map();
  let window = new Map();
  let left = 0;
  let right = 0;
  let matched = 0;

  for (let v of s1) {
    if (need.has(v)) {
      let count = need.get(v);
      count++;
      need.set(v, count);
    } else {
      need.set(v, 1);
    }
    window.set(v, 0);
  }

  while (right < s2.length) {
    let char = s2[right];
    right++;
    if (need.has(char)) {
      let count = window.get(char);
      count++;
      window.set(char, count);
      if (window.get(char) == need.get(char)) {
        matched++;
      }
    }

    while (right - left >= s1.length) {
      if (need.size == matched) {
        return true;
      }
      let char = s2[left];
      left++;
      if (need.has(char)) {
        if (need.get(char) == window.get(char)) {
          matched--;
        }
        let count = window.get(char);
        count--;
        window.set(char, count);
      }
    }
  }
  return false;
};
