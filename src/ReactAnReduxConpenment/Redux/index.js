import {createStore,applyMiddleware,compose}from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from  'redux-saga'
import rootsaga from '../Redux/saga'
import Reducer from './actions'
import history from './history'
import  {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from  'connected-react-router'
const routeM = routerMiddleware(history)
let logger = createLogger({
    collapsed:true
  })
let saga = createSagaMiddleware()
let store =  createStore(Reducer,compose(composeWithDevTools( applyMiddleware(routeM,saga,logger))) )
saga.run(rootsaga)
export default store