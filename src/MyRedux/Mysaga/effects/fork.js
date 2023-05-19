import {createEffect,effctTypes} from "../effectHelper";
import  runSaga  from "../runSaga";
import isGenerator from "is-generator";
export function fork  (generator,...ages){
    return createEffect(effctTypes.FORK,{
        fn:generator,
        ages
    })
}
export  const fokeEffect = (env,effect,next)=>{
    const {fn,ages} = effect.payload
    //启动新任务
    let result = runSaga(env,fn,ages)
     next(result)
}