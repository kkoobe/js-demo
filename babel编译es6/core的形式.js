const babel = require("@babel/core");
const fs = require('fs')
const resolve = require('path').resolve
babel.transformFile(resolve(__dirname,'./index.js'), function (err, result) {
    fs.writeFile(resolve(__dirname,'./dist/index2.js'),result.code,(err,data)=>{
        console.log(err,data)
    })
  })