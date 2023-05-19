import React from 'react'
import  './Tab.css'
export default function studentList(props) {
    let list = props.date.map(it=><tr key={it.id}>
        <td>{it.id}</td>
      <td>{it.name}</td>
        <td>{it.sex}</td>
        <td>{it.birth}</td>
        <td>{it.address}</td>
        <td>{it.phone}</td>
        <td>{it.email}</td>
      </tr>)
  return (
    <table className='Tab' >
      <thead >
      <tr>
    <th>学号</th>
    <th>姓名</th>
    <th>性别</th>
    <th>年龄</th>    
    <th>住址</th>
    <th>电话</th>
    <th>邮箱</th>
    </tr>
      </thead>
    <tbody >
    {list}
  </tbody>
    </table>

  )
}
