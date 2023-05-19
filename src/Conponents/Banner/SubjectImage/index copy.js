import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SubjectImage extends Component {
  static propTypes =  {
    img:PropTypes.string.isRequired,
    deration:PropTypes.number,
    opacity:PropTypes.number.isRequired
  }
  state = {
    opacity:0
  }
  timr = null
  tlke =  16
 imgref = (el)=>{
  this.div  =  el
}
setItn  =()=>{
  const Opacity =  Math.ceil(this.props.deration / 16 ) 
  const miao = 0.8 / Opacity
  let miao2 = 0
  let miao1 = 0.2
  clearInterval(this.timr)
  this.timr = setInterval(()=>{
        miao2 ++ ;
        miao1 += miao
     this.div.style.opacity =miao1
      if(miao2 === Opacity){
        this.div.style.opacity = 0.2
        clearInterval(this.timr)

      }
  },this.tlke)

}
componentWillReceiveProps(newprops){
  if(this.props.img !== newprops.img){
    this.setItn()
  }
}
componentDidMount(){
  this.setItn()
}
  render() {
    this.srv = this.props.img
    return (
      <div className='ImgDiv'  >
        <div className='layer' ref={this.imgref}   style={{opacity:this.state.opacity}}></div>
       <img  src={this.props.img} alt="爱你哦么么哒"  />
        </div>
    )
  }
}
