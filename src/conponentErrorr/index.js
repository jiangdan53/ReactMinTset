import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        hasError:false
    }
   
    static getDerivedStateFromError(err){
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log(info)
       
    }
  render() {
      if(this.state.hasError  || this.state.info){
          console.log(0)
          return <h1>出现错误了</h1>
      }
    return (
      <>
        {this.props.children} 
      </>
    )
  }
}
