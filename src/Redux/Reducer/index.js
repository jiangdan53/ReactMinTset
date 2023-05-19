/* eslint-disable import/no-anonymous-default-export */
// import * as  actionType from '../action/action-type'

// export default function  redirect(state = 10,action){
//     switch (action.type){
//         case actionType.INCERASE:
//             return state +1 ;
//         case actionType.DECREASE:
//             return state -1;
//         case actionType.SET:
//             return action.payload;
//             default :
//             return state
//         }
//     // if(action.type === actionType.INCERASE){
//     //     return  state +1  ;
//     // }else if(action.type === actionType.DECREASE){
//     //     return state  - 1;
//     // }else if(action.type === actionType.SET){
//     //     return action.payload ;
//     // }
//     return state;
//  }
//以上为基本的reducer


import loginUser from "./loginUser/loginUser";
import userAll from "./loginUser/userAll";
import  {combineReducers}from 'redux'
//合并reducer
// export default (state ={}, action) => {
//  const newState  = {
//      loginUser:loginUser(state.loginUser,action),
//      userAll:userAll(state.userAll,action)
//  }
//  return newState
// }
//redux提供的合并方法
export default combineReducers({
    loginUser,
    userAll
})
