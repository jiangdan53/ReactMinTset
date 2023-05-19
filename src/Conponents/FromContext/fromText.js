import React, { Component } from 'react'
import From from  './index'
export default class fromText extends Component {
  render() {
    return (
      <From onSubmit={date=>{
        console.log(date)
      }}>
             <div>
            用户名：<From.Input type='text' name='loginId'></From.Input>
        </div>
        <div>
            密码：<From.Input type='password' name='loginPs'></From.Input>
        </div>
        <div>
            <From.But>提交</From.But>
        </div> 
      </From>
    )
  }
}
