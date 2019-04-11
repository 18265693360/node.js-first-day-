const http = require("http")
const fs = require(fs)

http.creatServer(function(req,res){
    //console.log(req.url)
    var dir = __dirname + req.url
    console.log(dir)
    fs.readFile(dir.function(err,data))
    if(err){
        console.log(err);
    }else{
        res.statusCode = 200
        res.write(data)
        res.end()
    }
}).listeners(3002)