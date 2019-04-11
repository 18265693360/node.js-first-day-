// function funcName(params) {
//     return params + 2;
// }
// funcName(2);
// 4
// 简化代码
var funcName = (params) => params + 2
funcName(2);
// 4

// (parameters) => { statements }
// 没有参数 可以简化为
// () => { statements }
只有一个参数可以省略前括号
parameters => { statements }

返回值仅仅只有一个表达式expression还可以省去大括号
parameters => expression

等价于
function (parameters){
    return expression;
}



