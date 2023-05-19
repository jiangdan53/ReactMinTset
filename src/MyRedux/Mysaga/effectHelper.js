export const effctTypes = {
    CALL:"CALL",
    TAKE:"TAKE",
    FORK:"FORK",
    ALL:"ALL",
    APPLY:"APPLY",
    PUT:"PUT",
    SELECT:"SELECT",
    CANCAL:"CANCAL",
    TACKEVERY:"TACKEVERY"
}
const specialEffectType = "@@redux-saga/IO"
export const createEffect = (type,payload) =>{
    if(!Object.values(effctTypes).includes(type)){
        throw new TypeError('is type of undefind')
    }
    return  {
        [specialEffectType]:true,
        type,
        payload,
    }
}
export const isEffect = (obj)=>{
if(typeof obj !== 'object'){
    return  false;
}
if(obj[specialEffectType] === true){
    return true;
}
return false
}