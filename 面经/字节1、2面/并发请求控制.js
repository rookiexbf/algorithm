// 手动控制并发
function FetchWithLimit(urls,limit){
     let len = urls.length;
     let count = 0;
     let result = new Array(len).fill(false);
     return new Promise((resolve,reject)=>{
        while(count<limit){
            request()
        }
        function request(){
            let current  = count++;
            if(current >= len){
                resolve(result);
                return;
            }
            let url = urls[current];
            fetch(url).then((res)=>{
                result[current] = res
                if (current < len) {
                    request();
                }
            },(err)=>{
                result[current] = err
                if (current < len) {
                    request();
                }
            })

        }
     })
}