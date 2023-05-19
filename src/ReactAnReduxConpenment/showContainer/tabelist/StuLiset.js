/* eslint-disable no-undef */
import React from 'react'
import StudTabe from './studTabe'
import Page from '../../../PaGing/PaGingNumber/pangingNumber'
import MontLayer from '../../../Conponents/Montmorillonitelayer'
import '../../../PaGing/css/paging.css'

export default function StuLiset(props) {
  console.log('Tab更新了')
  function OnCkDiv(e){
    console.log(e)
  }
   console.log(props.date.isOver)
  return (
    props.date.isOver ? <MontLayer style={'0.5'} ShouLayer={props.date.isOver}  onCk={OnCkDiv} BackgrunColor={'rgba(0,0,0, 0.3)'}>
    <p className='layer-content'>这是我传入的蒙层内容<button className='But' onClick={OnCkDiv}>X</button></p>
</MontLayer>:
    <div className='stu-list'>
      {props.date ? <StudTabe date={props.date.date}/> :null }
      <Page 
      Arrr={{datalength:props.date.cont ,
        pageindex:props.result.page,
          pagequantity: 10, 
           maxpage: 5,
}}  OnCheng={(index)=>{
  console.log(index)
  let obj =  {
    page:index,
    size:10,
    sex:0,
    search:''
  }
  props.OnChenge(obj)
}}/>
    </div>
  )
}
