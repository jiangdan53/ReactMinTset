/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
export default function lists(props) {
    const [item, setitem] = useState(0)
    const Dom = props.list.map((it,i)=>(<li key={i} value={i}  className={i === item ? 'active' : ''} onClick={(e)=>{
        setitem(e.target.value)
    }}><NavLink to={it.to}>{it.title}</NavLink></li>))
  return (
    <ul>
        {Dom}
    </ul>
  )
}
