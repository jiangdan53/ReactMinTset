//1.此文件为嵌套路由路径生成文件
//2.作用利用递归减少地址修改是去该动很多文件中的路由地址
// ，目的减少冗余，增强灵活度
//3.使用时需传入一个参数为一个对象是你所需要的路由地址
//4.示例 {
//     uses:{
//         root:'/user',
//         upAdd:'/upadd',
//         pay:{
//             root:'/pay',
//             AddPay:'/addpay',
//             uppau:'/uppay'
//         }
//     }
// }

function  config(obj,baseStr){
    _setconFig(obj,baseStr)
}
function _setconFig(obj,baseStr){
    const NewStr = baseStr + (obj.root  !== undefined ? obj.root:'')
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value  === 'string') {
             if(prop === 'root'){
                 obj[prop] = baseStr + value
             } else{
                 obj[prop] = NewStr  +value;
             }  
        }else{
            _setconFig(obj[prop],NewStr)
        }
    }
}

export default config