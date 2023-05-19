  function ActionState(action){
    if(typeof action === 'object'){
        if(Object.getPrototypeOf(action) === Object.prototype){
            return true
        }
    }
    return false
  }
  function itic(length){
      let number = Math.random().toString(36).substring(2,length).split('').join(',')
      return number
  }


// eslint-disable-next-line import/no-anonymous-default-export
export default  function createStore (reducer,state,enhanced){
    if(typeof state === 'function'){
        enhanced = state
        state = undefined
    }
    if(typeof enhanced === 'function'){
        return enhanced(createStore)(reducer,state)
    }
    let propReducer = reducer,propState = state;
    let FunArr = []
function dispatch(action){
         if(action.type){
             if(ActionState(action)){
                propState =  propReducer(propState,action);
                for (const listener of FunArr) {
                        listener()
                }
             }
         }
     }
     dispatch( {
        type:`@@Reducer/INIT${itic(7)}`
    })
   function  getState(){
       return  propState
   }
   function subscribe(fun){
        FunArr.push(fun)
        return function (){
            FunArr = FunArr.filter(lt=> lt !== fun)
        }
   }
     return {
        dispatch,
         getState,
         subscribe
     }
}