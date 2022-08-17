// 简易版debounce
function debounce(fn,wait,immediate){
    let timer = null;
    return function(...args){
        let context = this;
        if(timer)clearTimeout(timer)
        if(immediate){
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait);
            callNow&&fn.apply(context,args)
        }else{
            timer = setTimeout(() => {
                fn.apply(context,args)
            }, wait);
        }
    }
}
// 简易版本throttle
function throttle(fn,wait,immediate){
    let flag = true;
    return function(...args){
        let context = this;
        if(!flag) return;
        flag =false;
        if(immediate){
            setTimeout(() => {
                flag = true;
            }, wait);
            fn.apply(context,args)
        }else{
            setTimeout(() => {
                fn.apply(context,args)
                flag = true
            }, wait);
        }
    }
}