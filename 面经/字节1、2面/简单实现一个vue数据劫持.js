// 简易实现mvvm劫持
class Vue{
    constructor(options){
        this.$data = options.data;
        this.$el = options.el
        // ...
        this.observe(this.$data)
        // ...
    }
    observe(obj){
        const keys = Object.keys(obj);
        for(let i=0;i<keys.length;i++){
            this.defineReactive(obj,keys[i])
        }
    }
    defineReactive(obj,key){
        const dep = new Dep()
        let val = obj[key]
        if(val !== null && typeof val == 'object'){
            this.observe(val)
        }
        let context = this
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get(){
                // if(Dep.target){
                //     dep.depend()
                // }
                console.log('get',val)
                return val
            },
            set(newVal){
                if(val!==newVal){
                    val = newVal;
                    console.log('set',newVal)
                }
                if(newVal !== null && typeof newVal == 'object'){
                    context.observe(newVal)
                }
                // dep.notify()
            }
        })
    }
}
class Dep{
// ...
}
let data ={
        tree:{a:1}
    }
let vm = new Vue({
    el:'#vue',
    data:data
})