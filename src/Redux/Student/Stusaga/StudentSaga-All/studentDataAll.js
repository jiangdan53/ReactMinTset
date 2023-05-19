import {ConditionActionType,getStudentDate}  from '../../Student-Action/condition-Action'
import {  put ,  cps , select ,cancel,fork, take, delay ,cancelled  ,race, call } from 'redux-saga/effects'
import {GetText}  from '../../../../unit/SumTool'
function mokeStudent(result,callbak){
    setTimeout(() => {
        if(Math.random()>  0){
            callbak(null,{
                cont:6,
                date:[{name:1},{name:2}]
            })
        }else{
            callbak(new Error('出错了'),null)
        }
    }, 2000);
}
function* SetStudentDate(){
    // yield delay(2000)
    //  const  Result  = yield select(state=> state.Result)
    //  console.log(Result)
    //  try{
    //     let reslut = yield cps(mokeStudent,Result)
    //     yield put(getStudentDate(reslut.date,reslut.cont))
    //     console.log('正在设置获取来的学生数据.....',reslut)

    //  }catch(err){
    //      console.log(err.message)
    //  }
    //fork实现takeEvery
    // let tske ;
    // while(true){
    //  const  Result  = yield select(state=> state.Result)
    // yield  take(ConditionActionType.studentSaga);
    // if(tske){
    //     yield cancel(tske)
    //     console.log('fork任务被取消了')
    // }
    //    tske = yield fork(function*  (){
    //         yield delay(2000)
    //         let reslut = yield cps(mokeStudent,Result)
    //         yield put(getStudentDate(reslut.date,reslut.cont))
    //     })
       
    // }
    //实现takeEvery出现自动触发action时重复调用问题
    // let tske ;
    // while(true){
    //  const  Result  = yield select(state=> state.Result)
    // yield  take(ConditionActionType.studentSaga);
    // if(tske){
    //     yield cancel(tske)
    //     console.log('fork任务被取消了')
    // }
    //    tske = yield fork(function*  (){
    //        while(true){
    //         yield delay(2000)
    //         let reslut = yield cps(mokeStudent,Result)
    //         yield put(getStudentDate(reslut.date,reslut.cont))
    //        }
          
    //     })
    // }
    //takeLatest防止多任务同时进行
    // while(true){
    //             const  Result  = yield select(state=> state.Result)
    //             // yield  take(ConditionActionType.studentSaga);
    //             yield delay(2000)
    //             let reslut = yield cps(mokeStudent,Result)
    //             yield put(getStudentDate(reslut.date,reslut.cont))
    //            }
  //fork高级使用：实现线程式管理任务的取消于监听
    // while(true){
    //     yield take(ConditionActionType.studentSaga)
    //       let  task  = yield  fork(function*(){
    //           try{
    //             while(true){ 
    //                 const  Result  = yield select(state=> state.Result)
    //                yield delay(2000)
    //                let reslut = yield cps(mokeStudent,Result)
    //                yield put(getStudentDate(reslut.date,reslut.cont))}
    //           }
    //           finally{
    //               if(yield cancelled()){
    //                   console.log('自动获取数据被取消了...')
    //               }
    //           }
             
          
    //     })
    //     yield take(ConditionActionType.Stop)
    //     yield  cancel(task)
    // };
    //利用race完成防止多任务同时进行，及取消
    while(true){
        yield take(ConditionActionType.studentSaga)
        yield race({
            StudentAdd:call(function*(){
                while(true){
                    const  Result  = yield select(state=> state.Result)
                                   yield delay(2000)
                                   let reslut = yield cps(mokeStudent,Result)//异步获取数据
                                   yield put(getStudentDate(reslut.date,reslut.cont))
                }
            }),
            Stop:take(ConditionActionType.Stop)
        })
    }
     
}
export  default function* (){
    console.log('获取所有学生数据All指令')
    let reslut =  yield fork(SetStudentDate)
}