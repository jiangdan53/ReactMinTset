import React, { Component } from 'react'
import Item from  './item'

export default class PureComponent extends Component {
  movesDiv = (date)=><div className='point'  style={{left:date.x-25,top:date.y-25}}></div>
  pointDiv = date =><div className='point'  style={{left:date.x-25,top:date.y-25}}>X:{date.x}Y:{date.y}</div>
  render() {
    return (
        <>
        
          <Item>
            {
              this.movesDiv
            }
          </Item>
     
        </>
    )
  }
}
