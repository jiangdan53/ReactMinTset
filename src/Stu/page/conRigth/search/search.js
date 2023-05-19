import React, { Component } from 'react'
import './index.css'
export default class search extends Component {

  constructor(prop){
    super(prop)
    let def =  {
      emlValueIn:'',
      RnValue:-1,
      changeUrl:false
    }
    this.state = Object.assign({},def,this.props.UrlSea)
  }
  SetValue= (e) =>{
    this.setState({
      RnValue:+e.target.value
    })
  }
  
  shouldComponentUpdate(prop,state){
    if(Object.is(prop,this.props) || !Object.is(state,this.state)){
      return true
    }
    return false
  }

  render() {
    return (
      <div className='search'> 按邮箱查询: <input className='search-Inp' type="text" 
      value={this.state.emlValueIn}
       onChange={e => {
          this.setState({
            emlValueIn:e.target.value
          })
       
      }} />
        <label> <input type="radio" value='-1' onChange={e => {
         this.SetValue(e)
        }}
          checked={this.state.RnValue === -1}
        />不限</label>
        <label><input type="radio" value='1' onChange={e => {
          this.SetValue(e)
        }}
          checked={this.state.RnValue === 1} />女</label>
        <label><input type="radio" value='0' onChange={e => {
          this.SetValue(e)
        }}
          checked={this.state.RnValue === 0} />男</label>
        <button className='search-but' onClick={() => {
          if(this.state.emlValueIn !== ''){
            this.setState({
              changeUrl:true
            })
          }
         
         this.props.GetSdate &&   this.props.GetSdate(this.state)
        }}>提交</button></div>
    )
  }
}

