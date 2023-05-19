import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContextB extends  React.Component {
    /**
     * 申明类型
     * 需要的数据
     */
    static  contextTypes = {
        b:PropTypes.string.isRequired,
        fun:PropTypes.func,
        a:PropTypes.number
    }
 
    render(){
        return <p>
            上下文B组件B={this.context.b}
            <button onClick={()=>{
                this.context.fun(this.context.a +1)
            }}>子组件+1</button>
        </p>
    }
}
function ContextA (props,context){
    return <>
        <h1>上下文A组件 A={context.a}</h1>
        <ContextB />
    </>
}
ContextA.contextTypes = {
    a:PropTypes.number.isRequired
}
export default class OldContext extends Component {
    static childContextTypes = {
        a:PropTypes.number.isRequired,
        b:PropTypes.string.isRequired,
        fun:PropTypes.func
    }
    state={
        a:1,
        b:'string'
    }
    getChildContext (){
        let newContex = Object.assign({},this.state,{fun:(newA)=>{
            this.setState({
                a:newA
            })
        }})
        return newContex
    }
  render() {
    /**
     * 创建上下文组件自己使用自己的数据
     * 一般不这样用
     */
    //   let contextDate =  this.getChildContext()
    return (
      <div>
          旧版API.....
          <ContextA />
          <button type="submit" onClick={()=>{
              this.setState({
                  a:this.state.a+1
              })
          }}>
              点击a+1
          </button>
          旧版API........
      </div>
    )
  }
}
