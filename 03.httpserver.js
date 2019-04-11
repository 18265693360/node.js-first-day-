onst http = requier("http")
const sever = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;chatset=utf-8"})
    res.write("<h1>欢迎访问Node服务器....</h1>")
    rea.write
})
res.end()