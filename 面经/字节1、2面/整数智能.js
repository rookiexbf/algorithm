// 实现一个名为 urlToObj 的函数，将一个 url 中的参数转换成对象，入参为 url，返回的结果为对象。
// let httpUrlStr = 'https://www.whatever.com?name=zhangsan&age=18';
// { "name": "zhangsan", "age":  "18" }

function urlToObj(url){
    let obj = {}
	let subUrl = url.split('?')[1];
    let params = subUrl.split('&');
    params.forEach(ele => {
       let kv = ele.split('=');
       obj[kv[0]]=kv[1];
    });
    return obj
}

// 实现一个名为 uniqueArray 的函数，去掉数组里面重复的内容
// [1, 1, 2, 3, 3, 1] => [1,2,3]

function uniqueArray(arr){
    let newArray = [...new Set(arr)];
    return newArray
}

// 找出一个字符串中出现次数最多的字符，并统计出现的次数
// "ababajshbaasdaaaa" => {char:'a',count:9}

function computeString(str){
    let len = str.length;
    let map = new Map();
    let max = -1;
    let char;
    for(let i=0;i<len;i++){
        if(map.has(str[i])){
            let cur = map.get(str[i]);
            map.set(str[i],cur+1);
        }else{
            map.set(str[i],1);
        }
    }
    for(let [k,v] of map.entries()){
        if(v>max){
            char = k
        }
        max = Math.max(max,v)
    }
    return {
        char,count:max
    }
}

// 实现一个防抖函数（debounce）。防抖：函数在一段时间内的多次调用，仅使得最后一次调用有效。
function debounce(fn,wait){
    let timer = null;
    return function(){
        let context = this;
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(context,arguments)
        }, wait);
    }
}

