//写文件 fs.wrirteFile()和fs.writeFileSync

//异步写文件
// 要写入文件的文件名  data要写入的数据
//data <String>\<Buffer> 都是一种二进制格式
//fs.writeFile(file,data[,options],callback)
//异地写入数据到文件，文件已经存在，则替代文件
//代码演示
var fs = require("fs")

fs.writeFile("test.js","哈哈哈，该吃饭了...",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("写入成功")
    }
})
