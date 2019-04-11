// 如果是载入系统模块，路径不能写，就直接写模块名就可以了
// node会有自己的加载机制
const http = require('http')
console.log(http)

// 如果是载入第三方模块 路径不能写 就直接写模块名就可以了
// node node会有自己的加载机制
// 一般情况下 项目中的第三方模块都是放在node_module这个文件夹下面的
// 这个文件夹不需要我们自己创建 在安装第三方模块时 会自动地创建
// 在安装一个第三方模块时 有时候 这个模块会依赖其他模块 他会自动下载很多的第三方模块
const ejs = require('ejs')

const out = require('./out')
out.eat()
console.log(out.a)