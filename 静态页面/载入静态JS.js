var http = require("http")
var fs = require("fs")
var path = require("path")
var url = require("url")

var server = http.createServer(function(req,res){
    var realurl = "http://" + req.headers.host + req.url

    var Objurl = url.parse(realurl)
    switch(Objurl.pathname){
        case"/index":
            fs.readFile("index.html","utf8",function (err,data) {
                if (err) throw err
                res.end(data)
            })
            break;
        case"/list":
            fs.readFile("./list.html","utf8",function(err,data){
                if (err) throw err
                res.end(data)
            })
            break

        default:
            var filename = path.join(__dirname,Objurl.pathname)
            if (fs.existsSync(filename)) {
                fs.readFile(filename,function(err,data){
                    if (err) throw err
                    res.end(data)
                })
            }else{
                res.end()
            }
            break
    }
})
server.listen(3000)