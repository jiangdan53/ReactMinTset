import {createActions,handleActions}  from 'redux-actions'
const defaultState =  {
        page:1,
        size:10,
        sex:0,
        search:''
}
export const {result} = createActions({
    RESULT:date=>date
})
const resultReducer = handleActions({
    RESULT:(state,{payload})=>{
        return {...state,...payload}
    }
},defaultState)
export default resultReducer