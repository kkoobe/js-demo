(function(win){
    // 定义一个请求方法
    let abortController = null
    function getFetch(url,data={},method='get'){
        if(abortController){
            abortController.abort()
        }
        abortController = new AbortController()
        if(method.toLowerCase()==='get'){
            return fetch(url+objToParams(data),{
                signal: abortController.signal
            })
        }else{
            return fetch(url,{
                method,
                body:JSON.stringify(data),
                signal: abortController.signal
            })
        }
    }
    // 对象转查询字符串
    function objToParams(obj={}){
        let str = '?'
        for(let key in obj){
            str+=`${key}=${obj[key]}&`
        }
        return str.slice(0,-1)
    }
   
    // 获取页面元素
    let demo1 = {
        btn1:document.querySelector('#btn1'),
        btn2:document.querySelector('#btn2'),
        btn3:document.querySelector('#btn3'),
        init(){
            this.bind()
        },
        bind(){
            this.addclick(btn1,{msg:'btn1',id:'1'})
            this.addclick(btn2,{msg:'btn2',id:'2'})
            this.addclick(btn3,{msg:'btn3',id:'3'})
        },
        addclick(btn,data){
            btn.addEventListener('click',()=>{
                getFetch('//127.0.0.1:3001/api',data,'get').then(res=>{
                    if(res.ok){
                        res.json().then(data=>{
                            alert(data.msg)
                        })
                    }
                })
            })
        }
    }
    demo1.init()
})(window)