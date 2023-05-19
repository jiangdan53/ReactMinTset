import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        hasError:false,
        value:''
    }
    handleChange=e=>{
        let value = e.target.value;
        this.setState({
            value:value
        })
    }
getdate=()=>{
    
}
  render() {
        // let date  =  this.getdate()
        // let com = date.map(it=><li>{it}</li>)
        return <div>错误边界</div>
  }
}
