import React, { Component } from 'react'
import PangingNumber from './PaGingNumber/pangingNumber'
import List from '../PaGing/DataList/List'
import MontLayer from '../Conponents/Montmorillonitelayer'


import './css/paging.css'
export default class paging extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pageindex: 1,
      datalength: 0,
      pagequantity: 10,
      maxpage: 5,
      ShouLayer:false,
      list: [{name:'xiaowanba',phone:1655544,id:'1'},{name:'xiaowanba',phone:1655544,id:'012'}]
    }
    this.RundeData(this.state.pageindex)

  }
  OnCkDiv = (e)  =>{
    if(e.target.className  === 'layer'  || e.target.className === 'But'){
        this.setState({
            ShouLayer:!this.state.ShouLayer
        })
    }
}
  RundeData = async () =>{
    await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.pageindex}&size=${this.state.pagequantity}`)
      .then(rec => rec.json(),rej =>{
        this.setState({
          datalength:2,
          ShouLayer:!this.state.ShouLayer

        })
      })
      .then(rec =>this.setState({
        datalength:rec.data.cont,
        list:rec.data.findByPage
      }))
    // this.setState({
    //   datalength: data.cont,
    //   list: data.findByPage
    // })
  }

  OnCheng = (page) => {
    // this.setState({//这种方式改变的状态可能是异步的 这个设置之后拿到的状态为未更新的状态值 
    //   pageindex: page
    // },()=>{
    // this.RundeData()
      
    // })
    this.setState(err=>{//这里的参数你可以完全信任 是属于状态更新后的值 
      return {
        pageindex:page
      }
    },()=>{
    this.RundeData()
    })
  }
 
  render() {
    if(!this.state.datalength){
      return   <MontLayer ShouLayer={this.state.ShouLayer}  onCk={this.OnCkDiv} BackgrunColor={'rgba(0,0,0, 0.3)'}>
      <p className='layer-content'>这是我传入的蒙层内容<button className='But' onClick={this.OnCkDiv}>X</button></p>
  </MontLayer>
    }
    return (
      <>
        <div>
          <List Arr={this.state.list}/>
        </div>
        <div><PangingNumber Arrr={this.state} OnCheng={this.OnCheng} />
        </div>
      </>

    )
  }
}
