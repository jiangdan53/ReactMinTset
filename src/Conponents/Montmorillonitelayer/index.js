import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    defaulProps = {
        LayerContent:<p className='layer-content'>这是一个默认蒙层,你可以自己传入</p>,
        BackgrunColor:'rgba(0,210,96,1)'
        }
     state = {
         ShouLayer:this.props.ShouLayer
     }   
     Acont = Object.assign({},this.defaulProps,this.props)
     
  
  render() {
      const LayerContent = this.Acont.children ? this.Acont.children: ''
      return (
          <>
            {this.props.ShouLayer ?    <div className='layer' onClick={(e)=>{
              this.props.onCk(e)
            }} style={{backgroundColor: this.Acont.BackgrunColor,opacity: this.props.style.opacity}}>
      {LayerContent}
      </div> : <></>}

          </>
    )
  }
}
