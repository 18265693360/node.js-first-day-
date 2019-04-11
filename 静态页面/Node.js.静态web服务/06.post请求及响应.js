//post请求就是动态响应页面的一种
//比如 输入用户名 密码 点击提交 需要服务器作出处理
//分布1.载入静态页面
const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const querystring = require(querystring)
http.createServer((req,res)=>{
    var urlObjct = url.parse(req.url)
    //consol.log(urlObjct)
    switch(urlObjct.pathname){
        case"/07.login":
            fs.readFile("./07.login.html","utf-8",(err,data)=>{
                if (err)return
                res.write(data)
            })
    }
})