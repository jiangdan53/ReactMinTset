import {effctTypes,createEffect} from '../effectHelper'
import ActionState from '../../utli/action-type'
export const put  = (action) =>{
    if(ActionState(action)){
        return createEffect(effctTypes.PUT,{
            objectPin:action
        })
    }else {
        return new TypeError('this action is not  defind')
    }
}
export const putEffect = (env,effect,next)=>{
    const {dispatch} = env.store
    const {objectPin} = effect.payload
    let result = dispatch(objectPin)
    next(result)
    
}