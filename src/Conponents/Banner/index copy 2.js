

import React, { Component } from 'react'
import  PropTypes from 'prop-types'
import Spot from './Spot'
import SubjectImage from './SubjectImage'
import Build from './Build'
import './index.css'
import Src1 from './img/1.jpg'
import Src2 from './img/2.webp'
import Src3 from './img/3.jpg'
import Src4 from './img/4.jpg'
import Src5 from './img/5.webp'


export default class index extends Component {
    static defaultProps = {
        width:520,
        heigth:280,
        imgSrc:[Src1,Src2,Src3,Src4,Src5],
        autoDuration:3000,
        deration:500,
        opacity:0
    }
    static propTypes = {
        width:PropTypes.number.isRequired,
        heigth:PropTypes.number.isRequired,
        imgSrc:PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration:PropTypes.number.isRequired,
        deration:PropTypes.number.isRequired
    }
   
    timr = null
   
    onClick = (target) =>{
   
      if(target === 'left'){
     
      }else {
    
      }
   
    }
  insFun = (el) =>{
    this.cuisDiv=el
  }
  componentDidMount(){
    let imgx=0

    this.timr=setInterval(()=>{
        imgx = (imgx+1)% this.props.imgSrc.length
      this.cuisDiv.mutatImg(imgx)
    },this.props.autoDuration)
  }
  render() {
    return (
      <div  className='Banner-conent'  style={{height:this.props.heigth+'px',width:this.props.width+'px'  }}>
        <SubjectImage
        ref={this.insFun}
        img={this.props.imgSrc} 
        deration={this.props.deration}
        opacity={this.props.opacity}
        width={this.props.width}
        height={this.props.heigth}
        />
        <Build  onClick={this.onClick}/>
        <Spot  />

      </div>
    )
  }
}
