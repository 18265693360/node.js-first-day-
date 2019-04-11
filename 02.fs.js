var fs = requier("fs")
// 异步读取文件
fs.readFile("./out.txt",{"encoding":"utf-8"},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// 同步读取
var res = fs.readFileSync("./out.txt",{"encoding":"utf-8"})
console.log(res)