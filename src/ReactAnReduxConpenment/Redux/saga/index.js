import { isOver ,getStudent } from "../actions/createAction";
import { result } from "../actions/resultAction";
import {takeEvery,select,put,call} from 'redux-saga/effects'
import {GetStuDate} from '../../../unit/SumTool'
function* getDate(){
    const result = yield select(res=>res.result)
          yield put(isOver(true))
          const date  = yield call([null,GetStuDate],result)
                yield put(getStudent(date.date,date.cont))
                yield put(isOver(false))
}
export  default function*  (){
   
     const action =  yield takeEvery(result().type,getDate)
}