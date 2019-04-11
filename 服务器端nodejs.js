const http = requier("http")
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("<h1>欢迎访问node服务器....</h1>")
    res.write("<h1>Hello Node.js Server....</h1>")
})

res.end()

const http = require("http")
const sever = http.createSever(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("<h1>welcome node sever ....</h1>")
    res.write("<h1>Hello Node.js Server....</h1>")
})
res.end()

const http = request("http")
const sever = http.createServer(function(req,res){
    res.writeHead(200,{"contenr-type":"text/html;charset=utf-8"})
    res.write("<h1>欢迎访问node服务器....</h1>")
    res.write("<h1>Hello Node.js Server....</h1>")
})
res.end()

c


const http = require("http")
const sever = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("<h1>Node服务端....</h1>")
    res.write("<h1>Hello Node.js Sever....</h1>")
})
