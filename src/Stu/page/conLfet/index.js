import React, { useState } from 'react'
import './index.css'
import {Link,NavLink} from  'react-router-dom'
export default function ConLeft() {
      const [Active, setActive] = useState(0)
  return (
  <>
    <li className={Active === 1 ? 'activeli' : ''} >
      <NavLink  onClick={()=>{
      setActive(1)
    }} to='student'  >学生列表</NavLink>
    </li>
    <li
    className={Active === 2 ? 'activeli' : ''} >
      <Link onClick={()=>{
      setActive(2)
    }} to='/student/add' state={{ id: 999, name: "i love merlin" }}>添加学生</Link>
    </li>
    <li className={Active === 3 ? 'activeli' : ''} >
      <Link  onClick={()=>{
      setActive(3)
    }} to='/conswme'>课程列表</Link>
    </li>
    <li className={Active === 4 ? 'activeli' : ''} >
      <Link onClick={()=>{
      setActive(4)
    }} to='/conswme/add'>添加课程</Link>
    </li>
  </>
  )
}




