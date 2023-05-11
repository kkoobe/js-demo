// 使用babel需安装@babel/core
// 需安装指令插件 @babel/cli
require("regenerator-runtime/runtime")
const fs = require('fs')
const resolve = require('path').resolve
const exec = require('child_process').exec
const command = `npx babel ${resolve(__dirname,'./index.js')} --out-dir ${resolve(__dirname,'dist')}`
exec(command,'utf8',(err,stdout,stderr)=>{
    console.log(err,1,stderr)
    console.log('编译成功！')
})