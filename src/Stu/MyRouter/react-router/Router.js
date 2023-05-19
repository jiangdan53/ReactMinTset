import React, { Component } from 'react'
import  ctx from './Router-Context'
import PropTypes from 'prop-types'
import MacthParams from '../MacthParams'
export default class Router extends Component {
    static propTypes = {
        history:PropTypes.object.isRequired
    }

    state={
        location:this.props.history.location
    }
    componentDidMount(){
        this.unListener =  this.props.history.listener((location,actions)=>{
            this.setState({
                location
            })
        })
    }
    componentWillUnmount(){
        this.unListener()
    }
  render() {
      const ctxValue = {
          history:this.props.history,
          location:this.state.location,
          macth:MacthParams('/',this.state.location.pathname)
      }
    //   this.ctxValue.history = this.props.history;//得到传递过来的history对象以及包含的方法
    //   this.ctxValue.location = this.state.location;//从history对象中去拿到location参数
    //   this.ctxValue.macth = MacthParams('/','/12')//拿到是否匹配地址的参数
    return (
        <ctx.Provider value={ctxValue}>
            {this.props.children}
        </ctx.Provider>
    )
  }
}
