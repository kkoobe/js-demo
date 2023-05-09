const express = require('express')
let app = new express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
    });
app.get('/api',(req,res)=>{
    let {query} = req
    if(query.id === '1'){
        setTimeout(()=>{
            res.send(query)
        },1500)
    }
    else if(query.id === '2'){
        setTimeout(()=>{
            res.send(query)
        },2000)
    }else{
        res.send(query)
    }
})
app.listen(3001,()=>{

})