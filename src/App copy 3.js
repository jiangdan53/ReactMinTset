import React from 'react'
import { BrowserRouter ,Route,Routers,witiRoute,Link,NavLink} from './Stu/MyRouter/react-router-dom'
import AddStu from './Stu/MyRouter/Route/page1'
import LisStu from  './Stu/MyRouter/Route/page2'
import {chengeSearch}from  '../src/Redux/Student/Student-Action/result-Action'
import {setSagaDate,setStop} from '../src/Redux/Student/Student-Action/condition-Action'
import { GetStuDate } from './unit/SumTool'
import  './app.css'
// import './Redux/index'
import store from './Redux/Student'
// import iterator from '../src/ES6/迭代器和生成器'
// import Generator from '../src/ES6/迭代器和生成器/Gemerator'
//组件会得到上下文参数及history对象的全部属性以及方法
window.setSagaDate =()=>{
  store.dispatch(chengeSearch({key:'d',sex:-1,}))
}
window.Stop=()=>{
  store.dispatch(setStop())
}
// GetStuDate().then(res=>console.log(res))
// store.dispatch(fach({
  
// }))
//迭代器  iterattors
// const iterators  = iterator(3,[1,3,5,6,8,9,2])
//生成器（generator)
// window.generator =  Generator()
// let next = iterators.next()
// while(!next.done){
//   console.log(next.value)
//   next = iterators.next()
// }
/**
 * 封装next增强函数  用于生成一个生成器并且可以使用异步
 * @param {*} props 参数为一个生成器函数 
 * @returns 
 */
// function  run(Generator){
//   let  generator  = Generator()
//     // let result =  generator.next()
//   chilkDate()
//   function chilkDate(resl){
//     let result =  generator.next(resl)
//   if(result.done){
//    return
//    }
//    generator.throw(new Error('nininin'))
//    let value  =  result.value
//    if(typeof value.then === 'function'){
//    value.then(date =>chilkDate(date))
//    }else{
//      chilkDate(value)
//    }
// }
// }

// run(Generator)
// let resl = window.generator.next()
//   while(!resl.done){
//     resl  = window.generator.next(resl.value)
//   }

function Chenge(props){
return  <h1>
<button onClick={()=>{
  props.history.push('/student/add')
}}>123</button>
<button onClick={()=>{
    props.history.push('/student/list') 
}}>replace</button>
<NavLink  to={{pathname:'/student/add',search:'#456'}} >点点试试</NavLink>
<p>1231</p>
<NavLink  to='/student/list' >点点试试</NavLink>

</h1>
}
function Com5 (props){
  return  <p onClick={()=>{
  props.value.history.push('/')
  }}>查看histry</p>
}
const Dom = witiRoute(Com5)
export default function App() {
  return (
     <BrowserRouter >
     {/* <Routers> */}
     <Route path='/'  element={<Chenge />}/>
     <Route path='/student/add' element={<AddStu />}>
       </Route>
       <Route path='/student/list' element={<LisStu />}>
       </Route>
       <Dom />
     {/* </Routers> */}
     </BrowserRouter>
   
      )
}
