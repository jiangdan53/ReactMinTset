import React, { PureComponent } from 'react'
import './index.css'

export default class item extends PureComponent {
  state  = {
    x:0,
    y:0  
  }
  refDiv =React.createRef();

  shoumove = (e) =>{
    // console.log(this.refDiv.current.getBoundingClientReact())
    let {left,top,width,height} = this.refDiv.current.getBoundingClientRect()//拿到真是Dom的属性
    // bottom: 
    // height: 
    // left: 
    // right: 
    // top: 
    // width: 
    // x: 
    // y: 
    let x = parseInt(e.clientX - left)
    let y = parseInt(e.clientY - top)
    if(x<25  ){
       x = 25
    }else if(x > width-25){
      x=width-25;
    }
    if(y<25  ){
      y = 25
   }else if(y > height-25){
     y=height-25;
   }
    this.setState({
      x,
      y
    })
  }
 
  render() {
    return (
      <div className='movs' ref={this.refDiv} onMouseMove={(e)=>{
        this.shoumove(e)
      }}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

