export default function ActionState(action){
    if(typeof action === 'object'){
        if(Object.getPrototypeOf(action) === Object.prototype){
            return true
        }
    }
    return false
  }