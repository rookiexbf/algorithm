// 简单实现发布订阅模式
class EventEmitter{
    constructor(){
        this.events = new Map();
    }
    on(eventName,callback){
        const callbacks = this.events.get(eventName) || []
        callbacks.push(callback)
        this.events.set(eventName,callbacks)
    }
    emit(eventName){
        const callbacks = this.events.get(eventName) || [];
        callbacks.forEach(cb => {
            cb()
        });
    }
    off(eventName,callback){
        const callbacks = this.events.get(eventName)
        if(!callbacks) return false;
        const newCallbacks = callbacks.filter((cb)=>{
            return cb!==callback
        })
        this.events.set(eventName,newCallbacks)
    }
    once(eventName,callback){
        const context = this
        const callbacks = this.events.get(eventName) || []
        callbacks.push(function one(){
            callback();
            context.off(eventName,one)
        })
        this.events.set(eventName,callbacks)
    }
}