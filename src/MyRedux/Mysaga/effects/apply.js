import {effctTypes,createEffect} from '../effectHelper'
import isPromise from 'is-promise'
export const apply = (cthis,func,ages)=>{
    return createEffect(effctTypes.APPLY,{
        context:cthis,
        fn:func,
        ages,
    })
}
export const applyEffect= (env,effect,next)=>{
        const {context,fn,ages} = effect.payload
        let result = fn.apply(context,ages)
        if(isPromise(result)){
            result.then(s=>next(s)).catch(err=>next(null,err))
        }else{
            next(result)
        }
}