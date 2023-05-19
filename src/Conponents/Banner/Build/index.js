import React, { Component } from 'react'
import PropTypes  from 'prop-types'
export default class Build extends Component {
  static propTypes = {
    onClick:PropTypes.func
  }
  render() {
    return (
      <div className='for' >
        <span className='for-left' onClick={()=>{
         this.props.onClick && this.props.onClick('left')
        }}>{'<'}</span>
        <span className='for-right' 
        onClick={()=>{
          this.props.onClick && this.props.onClick('rigeth')
         }}>{'>'}</span>
      </div>
    )
  }
}
