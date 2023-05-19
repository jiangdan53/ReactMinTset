import getStudentList from './createAction'
import Result from './resultAction'
import { combineReducers } from 'redux'
import {connectRouter}from 'connected-react-router'
import history from '../history'

export  default combineReducers({
date:getStudentList,
result:Result,
router:connectRouter(history)
})