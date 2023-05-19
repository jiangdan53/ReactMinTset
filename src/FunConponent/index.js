/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, } from 'react'
import PageStount from './Hook'
import useDate from './Hook/wiciFunc/useMyHook'
import PangingNumber from '../PaGing/PaGingNumber/pangingNumber'
// import UUid  from 'uuid'

import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'
import '../PaGing/css/paging.css'
import 'animate.css'
import './Hook/index.css'
export default function index() {
  const [index, setindex] = useState(1)
  const [stulent] = useDate(index, 10)
  const [inprop, setInprop] = useState(true)
  const [lists, setlists] = useState([{id:1,name:'任务1'},{id:2,name:'任务2'}])
  if (stulent) {
    return (
      <div >
        <SwitchTransition >
          <CSSTransition appear timeout={5000} key={inprop} classNames={{

            exitActive: 'animate__swing exit-active',
            exitDone: 'animate__backInLeft exit-done',
            enterActive: 'animate__backInUp enter-active',
            enterDone: 'animate__shakeX enter-done',
            appearActive: 'animate__bounce appear-active'
          }}>
            <ul className='animate__animated fast'>

              <PageStount date={stulent.findByPage} />
            </ul>
          </CSSTransition>
        </SwitchTransition>

        <div>
          <TransitionGroup appear  component='ul' className='oul'>

            
              {
                lists.map(it=><CSSTransition classNames={{
                  enterDone:'enter-done',
                  exitActive: 'animate__swing exit-active',
                  enterActive: 'animate__backInUp enter-active',
                }} timeout={1000} key={it.id}><li  className='animate__animated fast'>{it.name} <button onClick={()=>{
                  setlists(lists.filter(t=>t.id !== it.id))
                }}>删除</button></li></CSSTransition>)
              }
          </TransitionGroup>

              <button onClick={()=>{
               let name =  window.prompt()
               setlists([...lists,{id:3,name}])
              }}> 添加一个任务</button>
          <PangingNumber Arrr={{
            pageindex: index,
            datalength: stulent.cont,
            pagequantity: 10,
            maxpage: 5
          }} OnCheng={(index) => {
            setInprop(!inprop)
            setindex(index)

          }} />
        </div>
      </div>
    )
  }
  return null;
}

