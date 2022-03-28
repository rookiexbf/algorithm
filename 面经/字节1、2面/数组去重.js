// 简单暴力：双层for循环。外层循环元素，内层循环时比较值。

function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// indexOf或includes去重
// Array.sort() 加一行遍历冒泡(相邻元素去重)
// ES6 中的 Set 去重
// Object 键值对
// reduce 实现对象数组去重复
