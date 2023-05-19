import { bindActionCreators} from '../MyRedux'
import { createStore,applyMiddleware} from '../MyRedux'
import {createLogger} from 'redux-logger'
import thunk from  '../MyRedux/Redux-thuuk/thunk'
import { GetStudentAll } from '../unit/SumTool'
// import * as numberAction from './action/number-action'
import * as userAllAction from './action/userAllAction'
import * as  loginUser from './action/loginUserAction'
import Reducer from  './Reducer/index'
//自定义中间件 日志监控
// const logger1 = stoer => next=> action=>{//箭头函数简写中件函数
//         console.log('中间件1')
//         console.log(stoer.getState(),'旧数据')
//         console.log('action',action)
//         next(action)
//         console.log('')
//         console.log(stoer.getState(),'新数据1')
// }
// const logger2 = stoer => next=> action=>{//箭头函数简写中件函数
//   console.log('中间件2')
//   console.log(stoer.getState(),'旧数据')
//   console.log('action',action)
//   next(action)
//   console.log('')
//   console.log(stoer.getState(),'新数据2')
// }
// function logger1(stoer){
//   return  function(next){
//       return function(action){
//         console.log('中间件1')
//         console.log(stoer.getState(),'旧数据')
//         console.log('action',action)
//         next(action)
//         console.log('')
//         console.log(stoer.getState(),'新数据1')

//       }
//   }
// }
// function logger2(stoer){
//   return  function(next){
//       return function(action){
//         console.log('中间件2')
//         console.log(stoer.getState(),'旧数据')
//         console.log('action',action)
//         next(action)
//         console.log('')
//         console.log(stoer.getState(),'新数据2')
//       }
//   }
// }
//创建仓库方式一
let reduxLogger = createLogger({
  collapsed:true
})
 let store = createStore(Reducer,applyMiddleware(thunk,reduxLogger))
//仓库创建方式二 
/**
 * 第一个括号为中间件参数函数，第二个括号为创建仓库方法第三个括号为reducer数据管理函数
 */
// let store = applyMiddleware(logger1,logger2)(createStore)(Reducer)

 /**
  * 第一个参数为action创建函数和并的对象
  * 第二个参数为仓库的dispatch函数
  * 得到的第一个新的对象，新的对象中的属性名与第一个参数的属性名一直
  */

const boundAction =  bindActionCreators(userAllAction,store.dispatch)
const boundLoginUser = bindActionCreators(loginUser,store.dispatch)
// const un1  = store.subscribe(()=>{
// })
boundLoginUser.setUserDate()
boundAction.getAddUserAction({id:3,name:'dd4',age:10})
// un1()
//得到一个increase 并且自动分发
//
// async function getStudent(){
//   boundLoginUser.setIsLodin(true)

// let date = await GetStudentAll()

// boundLoginUser.getSTudent(date)
// if(date){
//   boundLoginUser.setIsLodin(false)
//   }
// }

// getStudent()
boundAction.getDeletUserAction(3)

// store.dispatch(numberAction.getSetAction(3))
// console.log(boundAction)
//按条件展示数据
//  async function getdate (){
//  let date = await GetStudentAll()
//  let newdate = []
//  date.filter(function(ele){
//    return ele.name.indexOf('2') ? newdate.push(ele) : undefined;
//  })
//  console.log(newdate)
//    }
//  window.getdate = getdate