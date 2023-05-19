import {effctTypes,createEffect} from '../effectHelper'
import isPromise from 'is-promise';
export const call = (pFun,...ages)=>{
    //这个韩式是创建一个effect对象
    let context = null,
        func = pFun
    if(Array.isArray(pFun)){
        context = pFun[0];
        func = pFun[1]
    }
   return createEffect(effctTypes.CALL,{
        context,
        fn:func,
        ages
   })
}
export const callEffect = (env,effect,next) =>{
    const {context,fn,ages} = effect.payload
    let  result = fn.call(context,...ages)
    if(isPromise(result)){
        //绑定this的结果如果为一个promies
        result.then(s=>next(s))
        .catch(err=>next(null,err))
    }else{
        //普通函数
        next(result)
    }
       
}