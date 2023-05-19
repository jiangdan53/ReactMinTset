import React, { PureComponent } from 'react'
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


export default class index extends PureComponent {
    static defaultProps = {
        width:520,
        heigth:280,
        imgSrc:[Src1,Src2,Src3,Src4,Src5],
        autoDuration:3000,
        deration:500,
        opacity:0,
        ins:[]
    }
    static propTypes = {
        width:PropTypes.number.isRequired,
        heigth:PropTypes.number.isRequired,
        imgSrc:PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration:PropTypes.number.isRequired,
        deration:PropTypes.number.isRequired
    }
    state =  {
      item:0,
      ins:[this.props.imgSrc[0],this.props.imgSrc[1]],
      opacity:this.props.opacity,
      fx:''

    }
    timr = null
    setDate =  (obj)=>{
      this.setState({
        ...this.sate,
        ...obj
      })
  }
    setInt  =()=>{
      clearInterval(this.timr)
     this.timr = setInterval(()=>{
    
        let cur = (this.state.item + 1) % this.props.imgSrc.length
        let Scur = this.props.imgSrc[ cur-1  === -1 ? this.props.imgSrc.length-1 :  cur-1]
        let curimg = this.props.imgSrc[cur]
            this.setDate({
              ins:[Scur,curimg],
              item:cur,
              opacity:0,
            })
          },this.props.autoDuration)
    }
    componentDidMount(){
      this.setInt()

    }
   
    onClick = (target) =>{
      let cur;
      let Scur  ;
      let curimg ;
      let opacity ;
      if(target === 'left'){
        clearInterval(this.timr)
        cur =  this.state.item-1
        if(cur < 0){
          cur = this.props.imgSrc.length-1
        }
        Scur =this.props.imgSrc[cur] 
        curimg = this.props.imgSrc[this.state.item] 
        opacity = -520
      }else if(target=== 'rigeth'){
        cur =  this.state.item+1
        if(cur > this.props.imgSrc.length-1){
          cur =  0
        }
        Scur = this.props.imgSrc[ cur-1  === -1 ? this.props.imgSrc.length-1 :  cur-1]
        curimg = this.props.imgSrc[cur]
        opacity = 0
        // this.setState({
        //   ins:[Scur,curimg],
        //   item:cur,
        //   opener:0
        // })
      }else{
        cur = target
       
        if(this.state.item > cur){
           Scur = this.props.imgSrc[cur]
           curimg = this.props.imgSrc[this.state.item]
           opacity = -520
        }else{
           Scur = this.props.imgSrc[this.state.item]
           curimg = this.props.imgSrc[cur]
           opacity = 0
        }
      }
      this.setDate({item:cur,opacity:opacity,ins:[Scur,curimg]})

    }
 
  render() {
    return (
      <div  className='Banner-conent'  style={{height:this.props.heigth+'px',width:this.props.width+'px'  }} onMouseEnter={()=>{
        clearInterval(this.timr)
      }}
      onMouseLeave={()=>{
        this.setInt()
      }}>
        
        <SubjectImage
        img={this.state.ins} 
        deration={this.props.deration}
        opacity={this.state.opacity}
        index={this.state.item}
        />
        <Build  onClick={this.onClick}/>
        <Spot legth={this.props.imgSrc.length} onClick={this.onClick} index={this.state.item}/>

      </div>
    )
  }
}
