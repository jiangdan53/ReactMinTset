import React, { Component } from 'react'

export default class Addfrom extends Component{
    
    state = {
        vla:null
    }
   onChange = e=>{
    this.setState({
      vla:e.target.value
  })
   }
  render() {
    return (
      <>
      %%%%添加一个单选框：<input  type="text" name={this.props.name} value={this.state.vlue} onChange={(e)=>{
         this.onChange(e)
      }}/>
      <button onClick={()=>{
          const vla = this.state.vla;
          this.props.onAdd && this.props.onAdd(this.props.name,vla)
      }}>
          提交
      </button>
      
      </>
    )
  }
}
