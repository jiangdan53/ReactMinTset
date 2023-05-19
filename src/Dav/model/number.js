/* eslint-disable import/no-anonymous-default-export */
export default {
    namespace: 'number',
    state:0,
    reducers:{
        increase(state){
            return  state + 1
        },
        decrease(state){
            return  state  -1  
        },
        add(state,{payload}){
            return state + payload
        }
    },
    effects:{
        *anfIncrease(cation,{call,put}){
            console.log(1)
            yield call(dayle,2000)
            yield put({
                type:'increase'
            })
        },
        *anfDecrease(cation,{call,put}){
            yield call(dayle,2000)
            yield  put({
                type:'decrease'
            })
        }

    }

}
function dayle(deonr){
    return new Promise(res=>{
        setTimeout(()=>{
            res()
        },deonr)
    })
}