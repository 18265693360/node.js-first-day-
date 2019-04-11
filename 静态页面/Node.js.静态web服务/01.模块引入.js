var http = require("http")
console.log(http)

//系统模块 require（"模块名"） 自定义模块（"./模块名"） 第三方模块 require("模块名"）


//自定义模块的使用流程
//1,创建模块

var cat = {
    name:"lala",
    age:5,
    say:function(){
        console.log("hellow")
    }
}
//导出模块
module.exports = cat //导出对象

//导出变量或者函数
exports.name = "lala"
exports.age = 10
exports.say = function(){
    console.log("hello")
}
//使用
var 猫眼 = require("./my2")
