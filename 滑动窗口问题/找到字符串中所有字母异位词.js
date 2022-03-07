// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

//  示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 思路：字符串排列类似问题，不过不是找到就返回，而是一直往下找，找到就吧索引加入数组

var findAnagrams = function (s, p) {
  let need = new Map();
  let window = new Map();
  let left = 0;
  let right = 0;
  let matched = 0;
  let res = new Array();
  for (v of p) {
    if (need.has(v)) {
      let count = need.get(v);
      count++;
      need.set(v, count);
    } else {
      need.set(v, 1);
    }
    window.set(v, 0);
  }
  while (right < s.length) {
    let char = s[right];
    right++;
    if (need.has(char)) {
      let count = window.get(char);
      count++;
      window.set(char, count);
      if (need.get(char) == window.get(char)) {
        matched++;
      }
    }
    while (right - left >= p.length) {
      if (matched == need.size) {
        res.push(left);
      }
      let char = s[left];
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
  return res;
};
