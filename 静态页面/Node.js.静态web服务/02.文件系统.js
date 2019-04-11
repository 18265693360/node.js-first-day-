//文件操作
//异步操作
// fs.readFile(file[,options],callback回调函数)
// //同步操作
// fs,readFileSync(file 表示读取文件[,options]可选参数)
//
// //代码演示
// //引入系统模块
// var fs = require('fs')
//
// //异步读取my.js
// //异步操作通过回调函数实现 出错了 错误信息都保存在err中
// //          表示读取文件  可选参数        以下都是回调函数
// fs.readFile("my.js",{encoding:"utf8"}.function(err,data){
//     if(err){           //err读取出错 通过err打印
//                        // data读取成功文件内容都存到了data
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//同步读取
//fs.readFileSync(file 要读取文件[,options]可选参数)
//如果指定了encoding选项，则该函数返回一个字符串 否则返回一个buffer
//代码演示
//引入系统模块fs
var fs = require("fs")

//同步的读取my.js
var data = fs.readFileSync("./my.js",{encoding: "utf8"})
console.log(data)
//小结
//所有的文件操作都有两个版本 同步 异步
//对于同步的，返回值就是文件的内容，对于异步的，文件中的内容在回调函数的参数中
