import {createEffect,effctTypes } from "../effectHelper";
export function take(actiontype){
    return createEffect(effctTypes.TAKE,{
        actiontype
    })
}
export const  takeEffect  = (env,effect,next)=>{
    const {channel} = env ;
    const {actiontype } = effect.payload
    channel.take(actiontype,action=>{
        next(action)
    })
}