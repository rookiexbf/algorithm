// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"

// 示例 3:
// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 思路:双指针,维护一个从左至右的子串窗口，找可行解，优化可行解不断重复知道整个字符串遍历到终点，得出最优解。
var minWindow = function (s, t) {
  let need = new Map();
  let window = new Map();
  let maxLength = s.length + 1;
  let left = 0;
  let right = 0;
  let matched = 0;

  for (let v of t) {
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
      if (window.get(char) == need.get(char)) {
        matched++;
      }
    }
    while (matched == need.size) {
      debugger;
      if (right - left < maxLength) {
        start = left;
        maxLength = right - left;
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
  return maxLength == s.length + 1 ? '' : s.substr(start, maxLength);
};
