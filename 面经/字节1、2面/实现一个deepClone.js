// 实现一个deepClone
function deepClone(obj){
    const cache = new Map()
    function clone(obj){
        if(typeof obj =='object'){
            if(cache.has(obj)){
                return cache.get(obj)
            }
            const newObject = Array.isArray(obj)?[]:{};
            cache.set(obj,newObject)
            for(let key in obj){
                newObject[key] = clone(obj[key])
            }
            return newObject
        }
        return obj
    }
    return clone(obj)
}
var obj = {
    a(){
        console.log(1)
    }
}

var newObj = deepClone(obj)
