import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class APP extends Component {
  constructor(props){
      super(props);
      this.state = {
        n: 0,
        show:true
      }

  }
  render() {
    const comp =  this.state.show ? <OldLifeCycle n={this.state.n}/> :  null
    return (
      <div>
      {comp}
      <button onClick={()=>{
        this.setState(err=>{
          return {
            n:err.n+1
          }
        })
      }}>n+1</button>
      <button onClick={()=>{
        this.setState(err=>{
          return {
            show:!err.show
          }
        })
      }}>显示/隐藏</button>
      </div>
  
    )
  }
}
