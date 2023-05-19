import React, { Component } from 'react'
import SumTool from '../../tool/SumTool'
import PropTypes from 'prop-types'
import './css/pagingNumber.css'
export default class pangingNumber extends Component {

    constructor(props){
        super(props);
        this.state  = {
        }
    
    }
    // static propTypes = {
    //   pageindex:PropTypes.number.isRequired,

    // }
     sumceli 
    
     shouldComponentUpdate(props,newprops){
        this.sumceli = SumTool.CeilSum(props.Arrr.datalength,props.Arrr.pagequantity,'/')
       return true
     }
    getmin  = (page) =>{
        let min = page - SumTool.FloorSum(this.props.Arrr.maxpage,2,'/');
        if(min < 1){
            min = 1
        }
        return min
    }
    getmax = (page) =>{
        let max  = page +  this.props.Arrr.maxpage - 1;
        if(max > this.sumceli){
            max = this.sumceli
        }
        return max
    } 
    createPage  = () =>{
        let DomArr =  [];
        let min = this.getmin(this.props.Arrr.pageindex)
        for(let i = min > 1 ? min : 1 ;  i <= this.getmax(min); i ++){
            DomArr.push(<span onClick={()=>{
              this.props.OnCheng(i)
            }} key={i} className={i === this.props.Arrr.pageindex ? 'item active':'item'}>{i}</span>)
        }

        return DomArr
    }
  render() {
    this.sumceli = SumTool.CeilSum(this.props.Arrr.datalength,this.props.Arrr.pagequantity,'/') 
    return (
      <div className='findByPage'>
      <span className= {this.props.Arrr.pageindex === 1 ?  'item noChrng': 'item'} onClick={()  =>{
          this.props.OnCheng(1)
          }}>首页</span>
      <span className={this.props.Arrr.pageindex  === 1 ?  'item noChrng'  : 'item'}  onClick={()  =>{
           this.props.OnCheng(this.props.Arrr.pageindex > 1 ? this.props.Arrr.pageindex - 1 : 1)
          }}>上一页</span>
        {this.createPage()}
      <span
       className={this.props.Arrr.pageindex === this.sumceli ? 'item noChrng': 'item'}
         onClick =  {() => {
          this.props.OnCheng(this.props.Arrr.pageindex < this.sumceli ? this.props.Arrr.pageindex +1  : this.sumceli)
         }}   
     >下一页</span>
      <span 
      className={this.props.Arrr.pageindex === this.sumceli ? 'item noChrng': 'item'}
      onClick =  {() => {
        this.props.OnCheng(this.sumceli)
      }}
      >尾页</span> 
      <span >  {this.props.Arrr.pageindex } / {this.sumceli}</span>  
      </div>
      
    )
  }
}
