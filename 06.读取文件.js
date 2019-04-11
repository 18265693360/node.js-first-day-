// var fs = require('fs')
//
// // 异步读取文件  异步是指代码的书写顺序和代码的执行顺序不一样
// // 在JS代码中 有些代码是同步的 有些代码是异步的 规定
// // 异步读取文有：事件 对文件或文件夹的操作 定时器
//
// console.log('start....')
// fs.readFile('./out.txt',{'encoding':"utf-8"},function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log('end.....')
//
// // 同步读取 同步是指代码书写顺序和代码执行顺序是一样的
// console.log('start....')
// var res = fs.readFileSync('.out.txt',{'encoding':"utf-8"})
// console.log(res)
// console.log('end........')

var fs = require('fs')

console.log('start....')
fs.readFile('./out.txt',{'encoding':'utf-8'},function(err,data){
    if (err){
        console.log(err)
    } else{
        console.log(data)
    }
})
console.log('end......')