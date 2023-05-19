import React from 'react'
import {CSSTransition} from 'react-transition-group'
 function addTransititon(node,timeout){
   node.style.transition = `${timeout}ms` 
 }
 function removeTransition(node){
  node.style.transition = `` 
}
export default function index(props) {

  return (
    <CSSTransition {...props} classNames='my' 
    onEnter={(node)=>{
    }}
    onEntering={node=>{
      addTransititon(node,props.timeout)
    }}
    onEntered={(node,isA)=>{
      removeTransition(node)
      
      props.onEntered && props.onEntered(node,isA)

    }}
    onExit={node=>{
      addTransititon(node,props.timeout)
      
    }}
    onExited={node=>{
      removeTransition(node)

      props.onExited && props.onExited(node)
    }}

    >
  
      
    </CSSTransition>
  )
}
