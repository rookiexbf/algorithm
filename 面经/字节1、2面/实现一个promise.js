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
    return new MyPromise((resolve, reject) => {
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
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          onFulfilled(this.PromiseResult);
        });
      }
      if (this.PromiseStatus == 'rejected') {
        setTimeout(() => {
          let x = onRejected(this.PromiseResult);
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
          onRejected(this.rejected);
        });
      }
      if (this.PromiseStatus == 'pending') {
        this.onFulfilledCallbacks.push(() => {
          let x = onFulfilled(this.PromiseResult);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.PromiseResult);
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        });
      }
    });
  }
}
