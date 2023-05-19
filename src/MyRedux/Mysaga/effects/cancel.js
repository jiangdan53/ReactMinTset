import {effctTypes,createEffect}from '../effectHelper'
export const cancal = (task)=>{
    return createEffect(effctTypes.CANCAL,{
        task
    })
}
export const cancalEffect = (env,effect,next)=>{
    const {task}  = effect.payload
    task.cancel()
    next()
}