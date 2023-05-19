import  {fork}  from './fork'
import { take } from './take'
export const takeEvery = (actiontype,generator,...ages)=>{
    return fork(function*(){
        while(true){
           let action =  yield take(actiontype)
             yield   fork(generator,...ages.concat(action))
        }
    })
}