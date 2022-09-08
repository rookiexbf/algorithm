// 实现一个模板引擎
function render(template, data) {    
    const reg = /\{\{(.+)\}\}/;     
    if (reg.test(template)) {
        const name = reg.exec(template)[1];        
        template = template.replace(reg, eval(name));        
        return render(template, data); 
    }    
    return template; 
}
let data = {
    obj:{
        a:'xbf'
    }
}
let template = '我是{{data.obj.a}}'
render(template,data)

// （）全排列
// n=2
// ['()()','(())'] 
function generateParenthesis(n){
    const res = [];
    const dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) { 
            res.push(str);           
            return;                 
        }
        if (lRemain > 0) {        
          dfs(lRemain - 1, rRemain, str + "(");
        }
        if (lRemain < rRemain) {   
            dfs(lRemain, rRemain - 1, str + ")"); 
        }
    };
    dfs(n, n, ""); 
    return res;
}
    // 千分位
    /**
     * @param {number} n
     * @return {string}
     */
    var thousandSeparator = function(n) {
        let str = String(n)
        let res = [];
        let cur = 0;
        for(let i=str.length-1;i>-1;i--){
            res.unshift(str.charAt(i));
            cur++;
            if(cur==str.length) continue
            if(cur == 3){
                res.unshift(',')
            }
        }
        return res
    };