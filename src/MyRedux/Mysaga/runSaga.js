/* eslint-disable import/no-anonymous-default-export */
import isGenerator from 'is-promise'
import { Task } from "./Tesk"
import { isEffect } from './effectHelper'
import isPromise from 'is-promise'
import runEffect from './runEffect'
/**
 * 开启一个新任务  
 * @param {function} generatorFun 生成器函数    
 */
export default function(env,generatorFun,...ages){
    // console.log(env)
    const iterator = generatorFun(...ages)
    if(isGenerator(iterator)){
        //不断调用next，知道迭代结束
        return proc(env,iterator)
    }else{
        return proc(env,iterator)
    }
    
}
export function proc(env, iterator) {
    var cbObj = {//回调函数对象
        callback: null
    }
    next(); //启动任务
    /**
         * 
         * @param {*} nextValue 正常调用iterator.next时，传递的值
         * @param {*} err 错误对象
         * @param {boolean} isOver 是否结束
         */
    function next(nextValue, err, isOver) {
        let result; //记录迭代的结果 {value: xxx, done: false}
        if (err) {
            result = iterator.throw(err)
        }
        else if (isOver) {
            result = iterator.return(); //结束整个迭代
            //调用一个回调函数
            cbObj.callback && cbObj.callback();
        }
        else {
            result = iterator.next(nextValue);
        }
        //解构出value和done
        const { value, done } = result;
        if (done) {
            //迭代结束了
            setTimeout(()=>{//使用异步拿值  不然则拿不到改变的值
                cbObj.callback && cbObj.callback();
            },0)
           
            return;
        }

        //没有结束
        if (isEffect(value)) {
            //情况1：是一个effect对象
            runEffect(env, value, next)
        }
        else if (isPromise(value)) {
            //情况2：value是一个promise
            value.then(r => next(r))
                .catch(err => next(null, err))
        }
        else {
            //情况3：其他
            next(value); //直接进行下一步
        }
    }

    return new Task(next, cbObj);
}
// export function pouc (env,iterator){
//     var probj = {
//         cb:null
//     }
//     next()
// /**
//      * 
//      * @param {*} nextValue //正常调用next传递的值
//      * @param {*} err //错误消息
//      * @param {*} isOver //是否结束
//      */
//  function next(nextValue,err,isOver){
//     // 情况1：调用iterator.next(value)
//     // 情况2：调用iterator.throw(err)
//     // 情况1：调用iterator.return()
  
//     let  result;
//     if(err){
//      result =   iterator.throw(err)
//     }else if(isOver){
//         result =  iterator.return()
//         probj.cb && probj.cb()
//     }else{
//         result = iterator.next(nextValue)
//     }
//     //结构出value done
//     const {value,done} = result
//     if(done){
//         //迭代结束
//         setTimeout(()=>{
//             probj.cb && probj.cb()
           
//         },0)
//         return ;
//     }
//     if(isEffect(value)){
//         runEffect(env,value,next)
//     }else{
//         //不是effect有两种情况
//         if(isPromise(value)){
//             value.then(s=>next(s)).catch(err=>next(null,err))
//         }else{
//             next(value)
//         }
//     }


// }

// return new  Task(next,probj)
// }