import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    state = {
        n:this.props.n
    }
    constructor(props){
        super(props)
        console.log('constructor','一个生命新组件诞生了')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount', '组件即将被挂载在虚拟Dom树上')
    }
    componentDidMount(){
        console.log('componentDidMount','挂载完成时调用该钩子函数')
    }
    componentWillReceiveProps(newprops){
        console.log('componentWillReceiveProps','该生命周期钩子函数用于接收到新的属性值',newprops)
    }
    shouldComponentUpdate(nexProps,nexState){
        console.log('shouldComponentUpdate','该钩子函数指示是否需要更新组件，该生命钩子函数是做为优化提升效率使用的钩子函数',nexProps,nexState)
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpadate','组件即将被重新渲染')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate','组件以完成重新渲染 这里拿到的状态为之前的状态',prevProps,prevState)
    }
  
    componentWillUnmount() {
        console.log('componentWillUnmount','组件被销毁')
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
