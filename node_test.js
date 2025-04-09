// node  事件循环中 会先处理timer 任务队列 然后再处理check任务队列
// 按理说 会先输出 123  -》2222  但是 由于settimeout 虽然延时为0  但实际不是 可能会有10ms
// 这个时候如果 执行栈中清空 就开始按照 timer->check队列便利 如果这个时候没有10ms timer队列为空
// 这个时候就会开始便利 check队列，执行2222 然后下次事件循环在输出 123

// 但如果在第一次执行宏任务结束时 settimeout 已经将回调推入到timer 任务队列了 ，则会出现 123-》2222现象
// 结论：
// 输出的顺序可能是123-》2222  也可能是2222-》123  取决于第一次宏任务执行完成的时间。。。。
// setTimeout(() => {  //放到timer  任务队列
//     console.log('123')
// }, 0);
// setImmediate(()=>{  //放到check 任务队列
//     console.log('2222')
//     process.exitCode = 0;
// })

// var child_process = require('child_process');
// var child = child_process.fork('./child_process.js',{
    // 子进程的输出不会打引导控制台，
//     silent: true
// })
// child.stdout.on('data', function(data){
//     console.log(JSON.stringify(data));
// });

// var child_process = require('child_process');

// var child = child_process.fork('./child_process.js');

// child.on('message', function(m){
//     console.log('message from child: ' + JSON.stringify(m));
// });

// child.send({from: 'parent'});

// const buf = Buffer.from('buffer');
// console.log(buf.toString())
// var letter = 'é';
// var buff = Buffer.from(letter); 
// console.log(buff.length)

var buf = Buffer.from('t?st');  // 默认采用utf8

// 输出：this is a tést
console.log(buf);