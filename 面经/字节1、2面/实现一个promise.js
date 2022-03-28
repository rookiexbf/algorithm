// Promise/A+ 规范实现
class MyPromise {
  constructor(callback) {
    this.PromiseStatus = 'pending';
    this.PromiseResult = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.PromiseStatus == 'pending') {
        setTimeout(() => {
          this.PromiseStatus = 'fulfilled';
          this.PromiseResult = value;
          this.onFulfilledCallbacks.forEach((cb) => {
            cb();
          });
        });
      }
    };
    let reject = (value) => {
      setTimeout(() => {
        if (this.PromiseStatus == 'pending') {
          this.PromiseStatus = 'rejected';
          this.PromiseResult = value;
          this.onRejectedCallbacks.forEach((cb) => {
            cb();
          });
        }
      });
    };
    try {
      callback(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : (value) => value;
      onRejected =
        typeof onRejected == 'function'
          ? onRejected
          : (value) => {
              throw Error(value);
            };
      if (this.PromiseStatus == 'fulfilled') {
        setTimeout(() => {
          let x = onFulfilled(this.PromiseResult);
          if (x == promise2) {
            return reject(new TypeError('same promise'));
          }
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        });
      }
      if (this.PromiseStatus == 'rejected') {
        setTimeout(() => {
          let x = onRejected(this.PromiseResult);
          if (x == promise2) {
            return reject(new TypeError('same promise'));
          }
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        });
      }
      if (this.PromiseStatus == 'pending') {
        this.onFulfilledCallbacks.push(() => {
          let x = onFulfilled(this.PromiseResult);
          if (x == promise2) {
            return reject(new TypeError('same promise'));
          }
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.PromiseResult);
          if (x == promise2) {
            return reject(new TypeError('same promise'));
          }
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        });
      }
    });
    return promise2;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(callback) {
    return this.then(callback, callback);
  }

  static all(promises) {
    return new myPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        let result = []; // 存储结果
        let count = 0; // 计数器

        // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
        if (promises.length === 0) {
          return resolve(promises);
        }
        promises.forEach((item, index) => {
          //  判断参数是否为promise与thenable对象
          if (item instanceof myPromise || (value instanceof Object && 'then' in value)) {
            myPromise.resolve(item).then(
              (value) => {
                count++;
                // 每个promise执行的结果存储在result中
                result[index] = value;
                // Promise.all 等待所有都完成（或第一个失败）
                count === promises.length && resolve(result);
              },
              (reason) => {
                /**
                 * 如果传入的 promise 中有一个失败（rejected），
                 * Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
                 */
                reject(reason);
              }
            );
          } else {
            // 参数里中非Promise值，原样返回在数组里
            count++;
            result[index] = item;
            count === promises.length && resolve(result);
          }
        });
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }

  static allSettled(promises) {
    return new myPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        let result = []; // 存储结果
        let count = 0; // 计数器

        // 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
        if (promises.length === 0) return resolve(promises);

        promises.forEach((item, index) => {
          // 非promise值，通过Promise.resolve转换为promise进行统一处理
          myPromise.resolve(item).then(
            (value) => {
              count++;
              // 对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。
              result[index] = {
                status: 'fulfilled',
                value
              };
              // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
              count === promises.length && resolve(result);
            },
            (reason) => {
              count++;
              /**
               * 对于每个结果对象，都有一个 status 字符串。如果值为 rejected，则存在一个 reason 。
               * value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
               */
              result[index] = {
                status: 'rejected',
                reason
              };
              // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
              count === promises.length && resolve(result);
            }
          );
        });
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }

  static any(promises) {
    return new myPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        let errors = []; //
        let count = 0; // 计数器

        // 如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
        if (promises.length === 0) return reject(new AggregateError('All promises were rejected'));

        promises.forEach((item) => {
          // 非Promise值，通过Promise.resolve转换为Promise
          myPromise.resolve(item).then(
            (value) => {
              // 只要其中的一个 promise 成功，就返回那个已经成功的 promise
              resolve(value);
            },
            (reason) => {
              cout++;
              errors.push(reason);
              /**
               * 如果可迭代对象中没有一个 promise 成功，就返回一个失败的 promise 和AggregateError类型的实例，
               * AggregateError是 Error 的一个子类，用于把单一的错误集合在一起。
               */
              cout === promises.length && reject(new AggregateError(errors));
            }
          );
        });
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }
  static race(promises) {
    return new myPromise((resolve, reject) => {
      // 参数校验
      if (Array.isArray(promises)) {
        // 如果传入的迭代promises是空的，则返回的 promise 将永远等待。
        if (promises.length > 0) {
          promises.forEach((item) => {
            /**
             * 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，
             * 则 Promise.race 将解析为迭代中找到的第一个值。
             */
            myPromise.resolve(item).then(resolve, reject);
          });
        }
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    if (value instanceof Object && 'then' in value) {
      return new Promise((res, rej) => {
        value.then(res, rej);
      });
    }
    return new MyPromise((res) => {
      res(value);
    });
  }

  static reject(value) {
    return new MyPromise((res, rej) => {
      rej(value);
    });
  }
}
