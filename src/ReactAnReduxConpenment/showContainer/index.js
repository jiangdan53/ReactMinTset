/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import './iniedx.css'
import Top from './topConment'
import List from './list'
export default function student(props) {
  const [islonding, setislonding] = useState(false)
  if(!islonding){
    props.OnChenge({
      page:1,
    size:10,
    sex:0,
    search:''
    })
    setislonding(true)
  }
  return (
    <div className='showStu'>
      <Top></Top>
      <List {...props}></List>
    </div>
  )
}
