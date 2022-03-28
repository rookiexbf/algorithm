// 模拟实现对象的for of
Object.prototype[Symbol.iterator] = function () {
  let curIndex = 0;
  let keys = Object.keys(this);
  let length = keys.length;
  return {
    next() {
      let obj = {
        value: keys[curIndex],
        done: curIndex < length ? false : true
      };
      curIndex++;
      return obj;
    }
  };
};
