import React, { Component } from 'react'
import './index.css'
export default class Layer extends Component {
  
  render() {
    return (
      <div className='conponent'>
          <div className='con-top'>
  
            {
              this.props.top  ? this.props.top :'使用时请传入头部区域'
            }
          </div>
          <div className="con-content">
            <ul  className='content-left'>
            {this.props.left ? this.props.left :' 使用时请传入导航栏区域' }
            </ul>
            <div  className='content-rigth'>
              {this.props.children ? this.props.children : '使用时请传入内容'}
              </div>  
          </div>
      </div>
    )
  }
}
