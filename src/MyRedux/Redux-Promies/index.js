/* eslint-disable import/no-anonymous-default-export */
import {isPlainObject,isString} from'lodash'
import isPromise from 'is-promise'
export default  ({dispatch})=>next=>action=>{
    console.log(next,'promies')
    if(!isFSA(action)){
        //判断当前action是否为一个标准的action
        //ruturn返回的就是判断action是否为promise对象如果是就通过then拿到返回值就是一个action通过dispatch函数去分发action
     return   isPromise(action) ? action.then(as=>  dispatch(as)) : next(action)
    }
    console.log(action)
    return isPromise(action.payload) ? 
    action.payload.then(payload=>dispatch({...action,payload})).catch(error=>dispatch({...action,payload:error,error:true})) :
        next(action)    
}

/**
 * 判断action是否为一个标准的action
 * @param {*} action 
 */
 function isFSA(action){
  return isPlainObject(action)
   && isString(action.type)
    && Object.keys(action).every(key=>['type','payload','error','mata'].includes(key))
 } 