// 实现效果如下
// function add(x,y,z){
//     return x+y+z
// }
// add(1,2,3)
// add(1,2)(3)
// add(1)(2)(3)

function curry(fn,...args){
    const length = fn.length;
    return function(...rest){
        let newArgs = [...args,...rest]
        if(newArgs.length<length){
            return curry.call(this,fn,...newArgs)
        }else{
            fn.call(this,...newArgs)
        }
    }
}
function add (a,b,c){
    console.log(a+b+c)
}
var _add = curry(add)

_add(1,2,3)
_add(1)(2)(3)
_add(1)(2,3)
_add(1,2)(3)
