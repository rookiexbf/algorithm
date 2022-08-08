// nexttick简易实现解析
const callbacks = []; //当前nexttick的cb列表
let pending = false; //保证一次事件循环只执行一次nexttick

function nexttick(cb,ctx){
    callbacks.push(()=>{
        try{
            cb.call(ctx)
        }catch(e){
            throw Error(e)
        }
    })
    if(!pending){
        pending = true;
        timerFunc()
    }
}

// 暂时不做兼容处理，默认promise
function timerFunc(){
    const p = Promise.resolve()
    p.then(()=>{
        flushCallbacks()
    })
}

// 清空队列
function flushCallbacks(){
    pending = false;
    const copies = callbacks.slice(0)//复制一份防止nexttick中调用nexttick,会向callbacks中添加,执行时机出错
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i]()
    }
}
