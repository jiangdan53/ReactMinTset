/* eslint-disable import/no-anonymous-default-export */
import ActionType from  './utli/action-type'
import number from './utli/number'
function vtlReducer(reducers){
if(typeof reducers !== 'object'){//判断当前的reducer是否为对象
    throw new TypeError('this is Reducers no object')
}
if(!ActionType(reducers)){//判断当前对象是否为一平面对象
    throw new TypeError('this is Reducers no plain-object')
}

for (const reducer in reducers) {
    if (Object.hasOwnProperty.call(reducers, reducer)) {
        const red = reducers[reducer];
        let state = red(undefined,{
            type:number.INIT()
        })
        if(state=== 'undefined'){
             throw new TypeError(' return is undefined')

        }
        state = red(undefined,{
            type:number.PROBE()
        })
        if(state === 'undefined'){
            throw new TypeError(' return is undefined')

        }
    }
}}
export default (reducers)=>{
    vtlReducer(reducers)
    return function(state = {},action){
        let newState = {}
        console.log(state)
        for (const reducer in reducers) {
            if (Object.hasOwnProperty.call(reducers, reducer)) {
                const liteReducer = reducers[reducer];
                newState[reducer] = liteReducer(state[reducer],action)
            }
        }
        return newState
    }
}