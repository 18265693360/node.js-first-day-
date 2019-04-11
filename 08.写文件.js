const fs = require('fs')

// fs.writeFile('./out.txt','helloworld',function (err) {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('写入成功')
//     }
// })
var res = fs.writeFileSync('./out.txt','99999999999999')
if(!res){
    console.log('写入成功')
}