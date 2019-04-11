// var str = ""
// for(var i=1;i<=9;i++){
//     for(var j=1; j<=i; j++){
//         str += i+'*'+j+'='+i*j
//         str += ' '
//     }
//     str += '\n'
// }
// console.log(str)

var str = ''
for(var i=1;i<=9;i++){
    for(var j=1; j<=i;j++){
        str += i + '*' + j +'='+i*j
        str += ' '
    }
    str += '\n'
}
console.log(str)