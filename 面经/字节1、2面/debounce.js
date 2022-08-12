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
    let timer = null;
    return function(...args){
        let context = this;
        if(immediate){
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null
            }, wait); 
            callNow&&fn.apply(context,args)
        }else{
            if(!timer){
                timer = setTimeout(() => {
                    fn.apply(context,args)
                    timer = null
                }, wait);
            }
        }
    }
}