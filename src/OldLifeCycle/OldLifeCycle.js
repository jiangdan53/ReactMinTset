import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    state = {
        n:this.props.n
    }
    constructor(props){
        super(props)
        console.log('constructor','一个生命新组件诞生了')
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate','该函数会在虚拟Dom挂载到真实dom之前运行通常用来实现一些附加的dom操作')
        return  <>1111</>    
    }
     componentDidUpdate(prevProps, prevState,snap) { 
        console.log('componentDidUpdate',prevProps,prevState,snap)
     }    
  render() {
      console.log('render')
    return (
        <>
         <p>属性{this.props.n}</p>
      <p>状态{this.state.n}</p>
        </>
    
    )
  }
}
