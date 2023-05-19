import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from  './fromContext'
export default class fromIput extends Component {
    static propTypes = {
        type:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired
    }
 
    static contextType = ctx
  render() {
    return (
      <>
      <input
       type={this.props.type}
       value={this.context.fromDate[this.props.name] || ''}
       name={this.props.name}
       onChange={(e)=>{
           this.context.onChange && this.context.onChange(this.props.name,e.target.value)
      }}/>
      </>
    )
  }
}
