const http = require("http")
const fs = require("fs")
http.createServer(function(req,res){
    //consol.log(req,res)
    var dir = __dirname + req.url
    console.log(dir);
    switch(req,url){
        case"/":
        case"51test.html":
            var data = ds.readFileSync("51test.html")
            res.statusCode = 200
            res.write(data)
            res.end()
            break
        default:
            if(fs.existsSync(dir) && fs.statSync(dir).isFile()){
                fs.readFile(dir,function(err,data){
                    if(err){
                        console.log(err)
                    }else{
                        res.statusCode = 200
                        res.write(data)
                        res.end()
                    }
                })
            }else{

            }

    }
}).listen(3003)