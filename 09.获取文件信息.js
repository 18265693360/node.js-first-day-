var fs = require('fs')

// fs.stat('./out.txt',function(err,data){
//     if (err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

var res = fs.statSync('./out.txt')
console.log(res)


var fs = require('fs')

fs.stat('./out.txt',function(err,data){
    if (err){
        console.log(err)
    } else{
        console.log(data)
    }
})


var res = fs.statSync('./out.txt')
console.log(res)

var fs = require('fs')

fs.stat('./out.txt',function (err,data) {
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }

    var res = fs.statSync('./out.txt')
    console.log(res)


})