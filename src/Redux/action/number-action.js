import * as  actionType from './action-type'

export  function getIncreaseAction(){
    return {
        type:actionType.INCERASE
    }
}
export  function getDecreaseAction(){
    return {
        type:actionType.DECREASE
    }
}
export  function getSetAction(Newnumber){
    return {
        type:actionType.SET,
        payload:Newnumber
    }
}