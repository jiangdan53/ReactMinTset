import {GetStuDate} from '../../../unit/SumTool'
export const ConditionActionType = {
    getStudentDate:'getStudent-date-action',
    setLoading:Symbol('setloading-action'),
    studentSaga:Symbol('student-saga'),
    setStudentAction:Symbol('set-student-action'),
    Stop:Symbol('set-stop')
}
export const getStudentDate =(date,cont)=>{
    return {
        type:ConditionActionType.getStudentDate,
        payload:{
            date,
            cont
        }
    }
}
export const setLoading = (isload) =>{
    return  {
        type:ConditionActionType.setLoading,
        payload:isload
    }
}
//以下为thunk代码
// export const fachGetStudentSearch =()=>{
//     return async  function(dispatch,getState,end){
//         let searchDate  = {
//             sex:getState().Result.sex,
//             search:getState().Result.key,
//             page:getState().Result.page,
//             size:getState().Result.linmt
//         }
//         dispatch(setLoading(true))
//         let  date  = await GetStuDate(searchDate)
//         dispatch(getStudentDate(date.date,date.cont))
//         dispatch(setLoading(false))
//     }
// }
/**
 * 使用redux-promies 中间件时使用出发action的方式就在成功(res)回调里面去调用action
 * @returns 
 */
//使用方式一
// export const fach =  ()=>{
//     return  new Promise((res,rej)=>{
//         setTimeout(()=>{
//         const action =  getStudentDate([{name:'dd',id:1},{name:'jdd',id:2}],2)
//             res(action)
//         },3000)
//     })
// } 
//使用方式二
// export const fach = async (condition)=>{
//     const date = await GetStuDate(condition)
//     return  getStudentDate(date.date,date.cont)
// }
//方式三
//返回一个平面对象但object.payload是一个promise 但必须遵循fuex-action标准执行 及action的type值必须为一个字符串 
export const fach = (condition)=>{
    return {
        type:ConditionActionType.getStudentDate,
        payload:new Promise((res,rej)=>{
            res(GetStuDate(condition).then(resp=>({
                date:resp.date,
                cont:resp.cont
            })))
        })
    }
} 
//以下为saga代码
export const setSagaDate = ()=>{
    return {
        type:ConditionActionType.studentSaga
    }
}
export const setStudentAction = () =>{
    return {
        type:ConditionActionType.setStudentAction
    }
}
export const setStop  = ()  =>{
    return {
        type:ConditionActionType.Stop
    }
}