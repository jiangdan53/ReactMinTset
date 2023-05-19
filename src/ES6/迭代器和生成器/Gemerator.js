/* eslint-disable import/no-anonymous-default-export */
import { GetText } from '../../unit/SumTool'
export default function* (arr){
// console.log('生成器的函数体 -开始')
// yield 1;
// console.log('生成器的函数体- 运行1')
// yield 2;

// console.log('生成器的函数体- 运行2')
// yield 3;
// console.log('生成器的函数体- 运行3')
// yield 4;
// console.log('生成器的函数体- 运行4')
// return '结束'
// for (const item of arr) {
//     yield item   
// }
//执行顺序为将yield后面的表达式的值先作为迭代器对象的value得值因此
//第一次在next函数传递的参数中参数没有意义，知道yield执行完毕才会对resl进行参数赋值（此时的参数是我们获取到的第一次yield执行完成的值 ）
//因此第一次的值会作为第二次调用next函数的参数(第一次的值作为第二次的参数)
// console.log('生成器的函数体 -开始')
// let  resl  = yield 1;
// console.log(`生成器的函数体- 运行${resl}`)
// resl  = yield 6;
// console.log(`生成器的函数体- 运行${resl}`)
// resl  =  yield 3;
// console.log(`生成器的函数体- 运行${resl}`)
// resl  =   yield 4;
// console.log(`生成器的函数体- 运行${resl}`)
// return '结束'
// console.log('正在请求.....')
// let reslu = yield GetText()
// console.log(`第一次请求结果`,reslu)
// reslu  =  yield GetText()
// console.log(`第二次请求结果`,reslu)
// reslu = yield 3
// console.log(`不是异步请求执行顺序${reslu}`)
//throw  方法
// try{
//     console.log('正在请求.....')
//     let reslu = yield 1
//     console.log(`第一次请求结果`,reslu)
//     reslu  =  yield 2
//     console.log(`第二次请求结果`,reslu)
//     reslu = yield 3
//     console.log(`不是异步请求执行顺序${reslu}`)
// }catch(err){
//     console.log(err)
//          yield 'acd' //出现错误不会报出 但无法继续next
// }

}