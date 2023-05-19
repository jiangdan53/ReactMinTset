/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";

import Top from '../showContainer/topConment'
import LfetList from "../showContainer/navList/lfetList";
import '../showContainer/iniedx.css'
import { connect } from "react-redux";
import  {result} from '../Redux/actions/resultAction'
import {Outlet}from 'react-router-dom'
 function list(props){
  const [isloding, setisloding] = useState(false)
  if(!isloding){
    props.dispatch(result({
      page:1,
      size:10,
      sex:0,
      search:''
    }))
  }
  return (
  <div className='showStu'>
  <Top></Top>
  <LfetList />
   <div className='stu-list'>
    <Outlet />
   </div> 
  </div>)
}
export default connect()(list)
// export default function dateComponent() {
//   const [first, setfirst] = useState({
//     pageindex: 1,
//     datalength: 60,
//     pagequantity: 10,
//     maxpage: 5,
//     ShouLayer:false,
// })
//   return (
//       <>
//           <Student />
//       </>

//   )
// }
