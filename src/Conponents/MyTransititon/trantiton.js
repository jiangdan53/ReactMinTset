/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import {TransitionGroup} from 'react-transition-group'
import MyTransition from './index'
import uuid from 'react-uuid'
import './index.css'
export default function trantiton() {
    const [inprop, setinprop] = useState(true)
    const [list, setlist] = useState([{ id: uuid(), name: '任务一' }, { id: uuid(), name: '任务二' }])

    let Dom = list.map(it => (<MyTransition key={it.id} appear  timeout={800} >
                <li>{it.name}<button onClick={()=>{
                setlist(list.filter(t=>t.id !== it.id))
            }}>删除</button></li>
    </MyTransition>))
    return (
        <div>
            <TransitionGroup component='ul'>
             {Dom}
            </TransitionGroup>
            <button onClick={() => {
                    let name =  window.prompt('输入任务名')
                    setlist([...list,{id:uuid(),name}])
            }}>显示隐藏</button>
        </div>
    )
}
