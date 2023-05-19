import React, { Component } from 'react'
import Studlist from './studlist'
import './css/list.css'
export default class List extends Component {
    constructor(props){
        super(props)
        this.stest = {

        }
    }
   
      
      
    render() {

        let Stud  = this.props.Arr.map(item=><Studlist key={item.id} {...item}/>)
    return (
        <>
        {/* <ul className='Oul'>
        <li  className='Oli'><tl>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
            <td>电话</td>
            <td>邮箱</td>
        </tl></li>
        <li  className='Oli'><tl>
            <td>蒋丹丹</td>
            <td>25</td>
            <td>男</td>
            <td>17341327663</td>
            <td>2564799@qq.com</td>
        </tl></li>
            <li  className='Oli'><span>姓名</span><span>年龄</span><span>性别</span><span>电话</span><span>邮箱</span></li>
            <li  className='Oli'><span>蒋丹丹</span><span>25</span><span>男</span><span>17341327663</span><span>256489546</span></li>
        </ul> */}
       
        <table>
           <thead>
             <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>住址</th>
                <th>操作</th>
             </tr>
           </thead>
           <tbody >
           {Stud}
            </tbody>
         </table>
                 

        </>
    )
  }
}