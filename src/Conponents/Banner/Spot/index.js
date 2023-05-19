import React, { Component } from 'react'

export default class Spot extends Component {
  render() {
    let comentSpan = []
    for(let i =0; i  < this.props.legth  ; i++){
     comentSpan.push(<span key={i} className={this.props.index === i ? 'activ' : ''} onClick={()=>{this.props.onClick(i)}}></span>) 

    }
    console.log()
    return (
      <div className='spot-conten'>
        {comentSpan}
      </div>
    )
  }
}
