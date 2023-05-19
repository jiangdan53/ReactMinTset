/* eslint-disable import/no-anonymous-default-export */
 function createThunk (exter){
return store=>next=>action=>{
    if( typeof action === 'function'){
       return action(store.dispatch,store.getState,exter)
    }

    return    next(action)
}
}
const thunk  = createThunk()
export default thunk
// return function (stoer){
//     return function(next){
//         return function(action){
            
//         }
//     }
// }