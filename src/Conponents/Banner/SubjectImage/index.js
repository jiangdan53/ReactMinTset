import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SubjectImage extends Component {
  static propTypes =  {
    img:PropTypes.arrayOf(PropTypes.string).isRequired,
    deration:PropTypes.number,
    opacity:PropTypes.number.isRequired
  }
  state = {
    opacity:520,
  }
  timr = null
  tlke =  16
 
 imgref = (el)=>{
  this.div  =  el
}
setItn  =(opacity)=>{
  const Opacity =  Math.ceil(this.props.deration / 16 ) 
  const miao = 520 / Opacity
  let miao2 = 0
  let miao1 = 0
  let Div =  this.div
  Div.style.marginLeft = opacity + 'px'   

  clearInterval(this.timr)
  if(opacity === -520){
    miao1  = opacity   
    this.timr = setInterval(()=>{
        miao2 ++ ;
        miao1 += miao
        Div.style.marginLeft = miao1 +'px'
      if(miao2 === Opacity){
        miao2 =  0 ;
        Div.style.marginLeft = 0 +'px' ;
        clearInterval(this.timr)
  
  
      }
     
    },this.tlke)
  }else{
    this.timr = setInterval(()=>{
        miao2 ++ ;
        miao1 -= miao
        Div.style.marginLeft = miao1 +'px'
      if(miao2 === Opacity){
        miao2 =  0 ;
        Div.style.marginLeft = -520 +'px' ;
        clearInterval(this.timr)
      }
     
    },this.tlke)
  }
}
shouldComponentUpdate(newprops,newstate){
  if(this.props.idnex !== newprops.index){
    this.setItn(newprops.opacity)
  }
 
  return true
}

  render() {
   const imgList =  this.props.img.map(it=> <img src={it}  key={it}/>)
    return (
    <>
     <div className='ImgDiv'  >
        <div ref={this.imgref} style={{marginLeft:this.props.opacity,width:520*2 + 'px'}}>
        {imgList}
        </div>
        </div>
      
    </>
     
    )
  }
}
