import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  state = {
    cur:false,
  }
        Default = {

            }
    Latest = Object.assign({},this.Default,this.props)
 
  render() {
    return (
      <div className='container' style={{
        height:this.Latest.Heigth? this.Latest.Heigth : ''
      }}>
          <div className='item2'>{this.Latest.children}</div>
          <div className='item1'>{this.Latest.itemLeft }</div>
          <div className='item3'>{this.Latest.itemRight}</div>
          {this.state.cur ?this.Dom:''}
          {/* {this.props.info ? '':ReactDOM.createPortal(<h1>这是插槽</h1>,document.querySelector('.item1'))} */}
          {/* {com} */}
      </div>
    )
  }
}
