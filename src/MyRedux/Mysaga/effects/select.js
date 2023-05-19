import {effctTypes,createEffect} from '../effectHelper'
export const select = (func)=>{
    return createEffect(effctTypes.SELECT,{
        fn:func
    })
}
export const selectEffect = (env,effect,next)=>{
    const {getState} = env.store;
    const {fn} = effect.payload
    let result = getState()
    if(fn){
        result = fn(result)
    }
    next(result)
}