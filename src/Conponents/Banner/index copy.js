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
        deration:1600,
        opacity:0
    }
    static propTypes = {
        width:PropTypes.number.isRequired,
        heigth:PropTypes.number.isRequired,
        imgSrc:PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration:PropTypes.number.isRequired,
        deration:PropTypes.number.isRequired
    }
    state =  {
      item:0
    }
    timr = null
    componentDidMount(){
        this.timr = setInterval(()=>{
      let cur = (this.state.item + 1) % this.props.imgSrc.length
          this.setState({
              item:cur
          })
        },this.props.autoDuration)
    }
    onClick = (target) =>{
      let cur;
      if(target === 'left'){
        cur =  this.state.item-1
        if(cur < 0){
          cur = this.props.imgSrc.length-1
        }
        console.log(cur)
      
      }else {
        cur =  this.state.item+1
        if(cur > this.props.imgSrc.length-1){
          cur =  0
        }
      }
      this.setState({
        item:cur
      })
    }
 
  render() {
    return (
      <div  className='Banner-conent'  style={{height:this.props.heigth+'px',width:this.props.width+'px'  }}>
        <SubjectImage
        img={this.props.imgSrc[this.state.item]} 
        deration={this.props.deration}
        opacity={this.props.opacity}
        />
        <Build  onClick={this.onClick}/>
        <Spot style={{marginBootm:-200+ 'px'}} />

      </div>
    )
  }
}
