// 简单模拟实现webpack，怎么在web端运行代码
// 伪代码 iife参数假定为已经生成好的modules graph
(function(modules){
    function __webpack_require__(modulesId){
        // 缓存模块
        const installModules = {}
        if(installModules[modulesId]){
            return installModules[modulesId].exports;
        }
        const module = {
            id:modulesId,
            exports:{}
        }
        modules[modulesId].call(null, module, module.exports, __webpack_require__)
        return module.exports
    }
    return __webpack_require__(0)
})([
     (function (module, __webpack_exports__, __webpack_require__) {
       const { b } = __webpack_require__(1); 
       const a = '我是a';
       console.log('打印' + a + b);
    }),
    (function (module, exports, __webpack_require__) {
      module.exports = {
        b: '我是b'
      };
    })
  ])
