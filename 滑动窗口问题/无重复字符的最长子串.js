// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */

// 思路：。。。。。

var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let left = 0;
  let right = 0;
  let window = new Map();
  while (right < s.length) {
    let char = s[right];
    right++;
    if (window.has(char)) {
      let count = window.get(char);
      count++;
      window.set(char, count);
    } else {
      window.set(char, 1);
    }
    while (window.get(char) > 1) {
      let char = s[left];
      left++;
      let count = window.get(char);
      count--;
      window.set(char, count);
    }
    res = Math.max(res, right - left);
  }
  return res;
};
