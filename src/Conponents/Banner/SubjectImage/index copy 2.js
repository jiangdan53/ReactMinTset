import React, { Component } from 'react'
export default class SubjectImage extends Component {
  
  state = {
    marginLfet:0
  }
  timr = null
  tlke =  16
 imgref = (el)=>{
  this.div  =  el
  }
  mutatImg(index){
     //目标距离
   
     let targetleft=  -index*this.props.width
     //当前left
    let currentlet = parseFloat(getComputedStyle(this.div).marginLeft)
    //需要移动的距离
   
      clearInterval(this.timr)
      this.timr =setInterval(()=>{
        cur++
        currentlet +=millimeterleft
        this.div.style.marginLeft = currentlet +'px'
          if(cur === frequency){
        this.div.style.marginLeft= targetleft +'px'

            clearInterval(this.timr)
      }
      },this.tlke)
    let moveleft =  targetleft - currentlet
    let frequency = Math.ceil(this.props.deration /  this.tlke)
    let millimeterleft  = moveleft / frequency
    let cur =0
    
  }
  render() {
    const imgS =  this.props.img.map(it=>           <img src={it} alt={it} key={it} />
    )
    return (
      <div ref={this.imgref} className='ImgDiv' style={{
        width:this.props.width * this.props.img.length,
        height:this.props.height,
        marginLeft:this.state.marginLfet,
        overflow:'history'

        }} >
          {imgS}
        </div>
    )
  }
}
