import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import Reducer from  './Student-Reducer'
// import thunk from '../../MyRedux/Redux-thuuk/thunk'
// import reduxPromise from 'redux-promise'
// import reduxPromise from  '../../MyRedux/Redux-Promies'

import rootsaga from './Stusaga'
import  createSagaMiddleware from '../../MyRedux/Mysaga'

let logger = createLogger({
  collapsed:true
})

let Saga = createSagaMiddleware()//创建一个saga中间件
let store = createStore(Reducer,applyMiddleware(Saga,logger))
Saga.run(rootsaga)
export default store