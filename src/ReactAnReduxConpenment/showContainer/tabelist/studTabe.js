/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useState} from 'react'
import MontLayer from '../../../Conponents/Montmorillonitelayer/'
export default function studTabe(props) {
    
    function OnCkDiv(e){
        console.log(e)
      }
        function getyear(yrde){
        return  new Date().getFullYear() - yrde
    }
   let  tabDom = props.date.date.map(it=>( <tr key={it.id}>
            <td>{it.id}</td>
            <td>{it.name}</td>
            <td>{it.sex < 1 ? '男' :'女'}</td>
            <td>{getyear(it.birth)}</td>
            <td>{it.phone}</td>
            <td>{it.email}</td>
            <td>{it.address}</td>
            <td><button className='xbtn'>修改</button><button className='sbtn'>删除</button></td>
        </tr>))
   
   
    return (
        <>
        {
            !props.date.isOver ?  <table className='Tab'>
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {tabDom }
            </tbody>
        </table> : <MontLayer style={'0.5'} ShouLayer={props.date.isOver}  onCk={OnCkDiv} BackgrunColor={'rgba(0,0,0, 0.3)'}>
    <p className='layer-content'>这是我传入的蒙层内容<button className='But' onClick={OnCkDiv}>X</button></p>
</MontLayer>
        }
           
        </>
    )
}
