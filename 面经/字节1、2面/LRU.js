/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.stack = new Map()
    this.maxSize = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.stack.has(key)){
        let popValue = this.stack.get(key);
        this.stack.delete(key);
        this.stack.set(key,popValue)
        return popValue
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.stack.has(key)){
        this.stack.delete(key);
    }
    this.stack.set(key,value);
    if(this.stack.size>this.maxSize){
        let popKey = this.stack.keys().next().value;
        this.stack.delete(popKey);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

