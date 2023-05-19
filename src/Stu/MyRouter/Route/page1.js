import React from 'react'
import Q from './q'
import W from './w'
import E from './e'
import R from './r'

import {BrowserRouter,Route,Routers} from '../react-router-dom'
export default function page1(props) {
  return (
   <>
   <button onClick={()=>{
     props.history.push('/student/add/q')
   }}>页面一</button>
   <button onClick={()=>{
     props.history.push('/student/add/w')
   }}>页面二</button>
   <button onClick={()=>{
    props.history.push('/student/add/e',{name:'w'})
    let   FLAG_A = 1; // 0001
    let   FLAG_B = 2; // 0010
    let   FLAG_C = 4; // 0100
    let   FLAG_D = 8; // 1000
    let   flags = 5; // 二进制的0101

if (flags & FLAG_C) {
console.log(flags,FLAG_C)
}
   }}>页面三</button>
   <button onClick={()=>{
     props.history.push('/student/add/r')
   }}>页面四</button>
    <BrowserRouter>
    <Routers>
      <Route path='/student/add/q' element={<Q/>}/>
      <Route path='/student/add/w' element={<W/>}/>
      <Route path='/student/add/e'  element={<E/>}/>
      <Route path='/student/add/r' element={<R/>}/>
    </Routers>
    </BrowserRouter>
   </>
    
  )
}
