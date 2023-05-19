
// import studentDataAll from './StudentSaga-All/studentDataAll'
// import studentLengthAll from './StudentSaga-All/studentLengthAll'
// import {getStudentDate} from '../Student-Action/condition-Action'
import {chengeSearch}from  '../Student-Action/result-Action'
import  {fork,cancal,delay,take,put,select  ,takeEvery,all} from '../../../MyRedux/Mysaga/effects'
import { ResultActionType  } from '../Student-Action/result-Action'
// import {take} from 'redux-saga/effects'
function* test2(){
    console.log('监听到了2的action',ResultActionType.condition)
}
function* test(){
        console.log('监听到了')
         let result =  yield takeEvery(ResultActionType.condition,test2)
        yield delay(5000)
        yield cancal(result)
        console.log('任务以取消')

}
function* test1(){
    console.log('监听到了2')
}
export default function* (){
           
                // let result =  yield call(['abc',promise],123)
                // console.log('异步数据',result)
                //     yield delay(2000)
                //     console.log('delay')
                // result  = yield apply('abc',promise,[123])
            //     let Result = yield select(res=>res.Result)
            //    let result = yield put(getStudentDate([{name:'1',age:18}],16))
            //      console.log('这是apply获取的异步',Result)
            // console.log('正在监听',ResultActionType.condition)
            // let result =  yield fork(test)
            // yield delay(10000)
            // yield cancal(result)
            // console.log('线程已被取消')
            //这里的take只监听一次 就不再监听了 
            //    let result = yield take(ResultActionType.condition)
            //     console.log('监听到了',ResultActionType.condition)
            // let result = yield take(ResultActionType.condition)
            // console.log('213',result)
        //    let result = yield takeEvery(ResultActionType.condition,test)
        //     yield delay(5000)
        //    yield cancal(result)
           yield all([test(),test1()])
           console.log('saga 完成')
        // console.log('saga开始执行了',a,b,c)
        //take指令,因只会调用一次所以用循环来实现监控
    // while(true){
    //     let reslut = yield take(ConditionActionType.studentSaga);
    //     console.log('指令执行后的数据',reslut)
    // }
 //all指令 一个接收参数的指令 参数为生成器
    // yield all([studentDataAll(),studentLengthAll()])
    // console.log('saga完成了....')
}